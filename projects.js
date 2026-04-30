// Please replace with the actual CSV export URLs of your Google Sheets.
// You need to publish the specific sheet to web as CSV.
const PRESENTATIONS_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTc6_s80mRrauhlGbHMAWw2SjNU35Oaj634qdCcT83SQqx84ObqUyhgqoYCc3FOF4gQTLma9tafW-17/pub?gid=390849330&single=true&output=csv';
const CHAIRING_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTc6_s80mRrauhlGbHMAWw2SjNU35Oaj634qdCcT83SQqx84ObqUyhgqoYCc3FOF4gQTLma9tafW-17/pub?gid=2115944028&single=true&output=csv';

document.addEventListener("DOMContentLoaded", () => {
    // Presentations
    if (PRESENTATIONS_CSV_URL === 'YOUR_PRESENTATIONS_CSV_URL_HERE') {
        document.getElementById("presentations-list").innerHTML = "<li><em>Awaiting Presentations Google Sheet CSV URL... Please configure in projects.js</em></li>";
    } else {
        fetchAndRenderData(PRESENTATIONS_CSV_URL, "presentations-list", formatPresentation);
    }

    // Chairing
    if (CHAIRING_CSV_URL === 'YOUR_CHAIRING_CSV_URL_HERE') {
        document.getElementById("chairing-list").innerHTML = "<li><em>Awaiting Chairing Google Sheet CSV URL... Please configure in projects.js</em></li>";
    } else {
        fetchAndRenderData(CHAIRING_CSV_URL, "chairing-list", formatChairing);
    }
});

function fetchAndRenderData(url, containerId, formatItemFn) {
    Papa.parse(url, {
        download: true,
        header: true,
        skipEmptyLines: true,
        transformHeader: h => h.trim(),
        transform: v => v.trim(),
        complete: function(results) {
            // Reverse so the latest added items (if at the bottom of the sheet) appear first.
            // If the sheet is already in chronological order (newest first), remove this reverse() call.
            let data = results.data;
            data.reverse(); 

            renderList(data, containerId, 10, formatItemFn);
        },
        error: function(err) {
            console.error(`Error fetching data for ${containerId}:`, err);
            document.getElementById(containerId).innerHTML = "<li>Error loading data.</li>";
        }
    });
}

function renderList(data, containerId, limit, formatItemFn) {
    const listContainer = document.getElementById(containerId);
    listContainer.innerHTML = "";
    
    const itemsToShow = data.slice(0, limit);
    itemsToShow.forEach(item => {
        const li = formatItemFn(item);
        listContainer.appendChild(li);
    });

    // If there are more items to show, add a "Show More" button
    if (data.length > limit) {
        const showMoreContainer = document.createElement("div");
        showMoreContainer.className = "show-more-container";
        
        const btn = document.createElement("button");
        btn.className = "show-more-btn";
        btn.textContent = `Show More (${data.length - limit} remaining)`;
        btn.onclick = () => {
            // Re-render the full list to show all items
            renderList(data, containerId, data.length, formatItemFn);
        };
        
        showMoreContainer.appendChild(btn);
        listContainer.appendChild(showMoreContainer);
    }
}

function formatPresentation(item) {
    const li = document.createElement("li");
    
    // Using aesthetic typography hierarchy matching the publications page
    let html = `<strong>${item.Title || 'Untitled'}</strong><br>`;
    if (item.Event) html += `<span class="journal"><em>${item.Event}</em></span><br>`;
    
    let locDate = [];
    if (item.Location) locDate.push(item.Location);
    if (item.Date) locDate.push(item.Date);
    
    if (locDate.length > 0) {
        html += `<span class="authors">${locDate.join(' | ')}</span>`;
    }
    
    li.innerHTML = html;
    return li;
}

function formatChairing(item) {
    const li = document.createElement("li");
    
    // Using aesthetic typography hierarchy matching the publications page
    let html = `<strong>${item.Role || 'Untitled Role'}</strong><br>`;
    if (item.Event) html += `<span class="journal"><em>${item.Event}</em></span><br>`;
    
    let locDate = [];
    if (item.Location) locDate.push(item.Location);
    if (item.Date) locDate.push(item.Date);
    
    if (locDate.length > 0) {
        html += `<span class="authors">${locDate.join(' | ')}</span>`;
    }
    
    li.innerHTML = html;
    return li;
}
