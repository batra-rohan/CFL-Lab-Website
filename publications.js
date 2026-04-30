// Please replace 'YOUR_GOOGLE_SHEET_CSV_URL' with the actual CSV export URL of your Google Sheet.
const GOOGLE_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTc6_s80mRrauhlGbHMAWw2SjNU35Oaj634qdCcT83SQqx84ObqUyhgqoYCc3FOF4gQTLma9tafW-17/pub?gid=1356320061&single=true&output=csv';

let globalPubsByTab = {};

document.addEventListener("DOMContentLoaded", () => {
    if (GOOGLE_SHEET_CSV_URL === 'YOUR_GOOGLE_SHEET_CSV_URL') {
        console.warn("Please update the GOOGLE_SHEET_CSV_URL in publications.js");
        document.getElementById("publications-list").innerHTML = "<li><em>Awaiting Google Sheet CSV URL... Please configure in publications.js</em></li>";
        return;
    }

    Papa.parse(GOOGLE_SHEET_CSV_URL, {
        download: true,
        header: true,
        skipEmptyLines: true,
        transformHeader: h => h.trim(),
        transform: v => v.trim(),
        complete: function (results) {
            processPublications(results.data);
        },
        error: function (err) {
            console.error("Error fetching publications:", err);
            document.getElementById("publications-list").innerHTML = "<li>Error loading publications.</li>";
        }
    });
});

function processPublications(data) {
    const rawPubsByYear = {};

    // Reverse data so latest publications appear first within a year
    data.reverse();

    // Group raw data by year safely
    data.forEach(pub => {
        if (!pub.Year) return;
        const year = pub.Year;
        if (!rawPubsByYear[year]) {
            rawPubsByYear[year] = [];
        }
        rawPubsByYear[year].push(pub);
    });

    const sortedYears = Object.keys(rawPubsByYear).sort((a, b) => b - a);
    const tabsToCreate = [];
    globalPubsByTab = {};

    // Take top 5 years
    let numRecentYears = Math.min(5, sortedYears.length);
    for (let i = 0; i < numRecentYears; i++) {
        const year = sortedYears[i];
        globalPubsByTab[year] = rawPubsByYear[year];
        tabsToCreate.push(year);
    }

    // Group remaining into "Older"
    if (sortedYears.length > 5) {
        globalPubsByTab["Older"] = [];
        for (let i = 5; i < sortedYears.length; i++) {
            globalPubsByTab["Older"] = globalPubsByTab["Older"].concat(rawPubsByYear[sortedYears[i]]);
        }
        tabsToCreate.push("Older");
    }

    const tabsContainer = document.getElementById("year-tabs");
    const listContainer = document.getElementById("publications-list");

    tabsContainer.innerHTML = "";
    listContainer.innerHTML = "";

    if (tabsToCreate.length === 0) {
        listContainer.innerHTML = "<li>No publications found.</li>";
        return;
    }

    // Create buttons for each tab
    tabsToCreate.forEach((tabName, index) => {
        const tabBtn = document.createElement("button");
        tabBtn.className = "year-tab-btn";
        tabBtn.textContent = tabName;
        tabBtn.onclick = () => renderTab(tabName, tabsContainer, listContainer);
        tabsContainer.appendChild(tabBtn);
    });

    // Render the first tab initially
    renderTab(tabsToCreate[0], tabsContainer, listContainer);
}

function renderTab(tabName, tabsContainer, listContainer) {
    // Update active tab button style
    const tabs = tabsContainer.getElementsByClassName("year-tab-btn");
    for (let tab of tabs) {
        if (tab.textContent === tabName) {
            tab.classList.add("active");
        } else {
            tab.classList.remove("active");
        }
    }

    // Render initially up to 10
    const pubs = globalPubsByTab[tabName] || [];
    renderList(pubs, listContainer, 10);
}

function renderList(pubs, listContainer, limit) {
    listContainer.innerHTML = "";

    const itemsToShow = pubs.slice(0, limit);
    itemsToShow.forEach(pub => {
        const li = createPublicationLi(pub);
        listContainer.appendChild(li);
    });

    // If there are more items to show, add a "Show More" button
    if (pubs.length > limit) {
        const showMoreContainer = document.createElement("div");
        showMoreContainer.className = "show-more-container";

        const btn = document.createElement("button");
        btn.className = "show-more-btn";
        btn.textContent = `Show More (${pubs.length - limit} remaining)`;
        btn.onclick = () => {
            // Re-render the full list to show all items
            renderList(pubs, listContainer, pubs.length);
        };

        showMoreContainer.appendChild(btn);
        listContainer.appendChild(showMoreContainer);
    }
}

function createPublicationLi(pub) {
    const li = document.createElement("li");

    let html = `<strong>${pub.Title || 'Untitled'}</strong><br>`;
    if (pub.Authors) html += `<span class="authors">${pub.Authors}</span><br>`;
    if (pub.Journal) html += `<em class="journal">${pub.Journal}</em>`;

    let linksHtml = "";

    // Parse DOI
    const doi = pub.DOI || pub.Doi || pub.doi;
    if (doi) {
        let href = doi;
        if (!href.startsWith("http")) {
            href = `https://doi.org/${href}`;
        }
        let displayDoi = doi.replace('https://doi.org/', '').replace('http://dx.doi.org/', '');
        linksHtml += ` <a href="${href}" class="pub-link" target="_blank" rel="noopener">[DOI: ${displayDoi}]</a>`;
    }

    // Generic Link
    if (pub.Link) {
        linksHtml += ` <a href="${pub.Link}" class="pub-link" target="_blank" rel="noopener">[Link]</a>`;
    }

    if (linksHtml !== "") {
        html += `<span class="pub-links">${linksHtml}</span>`;
    }

    li.innerHTML = html;
    return li;
}
