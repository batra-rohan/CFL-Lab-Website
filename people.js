// focus takes values top, center, bottom based on the location of the face
// zoom is optional depending on the image
const peopleData = {
  current: {
    // Update Masters students here. Fields - name, image location, year, email, focus, zoom
    Masters: [],
    PhD: [
      // Update PhD student details here. Fields - name, image location, year, email, focus, zoom
      { name: "Abhishek Kumar", image: "people/current/PhD/Abhishek.jpg", year: "2022", email: "abhishekk22@iitk.ac.in", focus: "center" },
      { name: "Shrajesh Patel", image: "people/current/PhD/Shrajesh.jpg", year: "2022", email: "shrajesh22@iitk.ac.in", focus: "center" },
      { name: "Sujaan Mookherjee", image: "people/current/PhD/Sujaan.jpg", year: "2024", email: "sujaanm24@iitk.ac.in", focus: "top", zoom: "1.2" },
      { name: "Mahesh Malav", image: "people/current/PhD/Mahesh.jpg", year: "2023", email: "malavm23@iitk.ac.in", focus: "top" },
      { name: "Rahul", image: "people/current/PhD/", year: "2023", email: "rahulyadav23@iitk.ac.in", focus: "top" },
      { name: "Devanjali Sharma", image: "people/current/PhD/Devanjali.jpg", year: "2025", email: "devanjalis25@iitk.ac.in", focus: "top" }
    ],
    PostDoc: [
      // Update Post Doc details here. Fields - name, image location, year, email, focus, zoom  
      { name: "Dr. Kalyani Agarwal", image: "people/current/Post Doc/Kalyani Agarwal.jpg", year: "2023", email: "kalyaniag@iitk.ac.in", focus: "center", zoom: "1.2" },
      { name: "Dr. Prachishree Panda", image: "people/current/Post Doc/Prachi.jpeg", year: "2024", email: "ppanda@iitk.ac.in", focus: "top" },
      { name: "Dr. Vivek Kumar \n (FARE Fellow)", image: "people/current/Post Doc/Vivek.jpg", year: "2026", email: "kvivek@iitk.ac.in", focus: "center" },
      { name: "Shivangi Mittal \n (FARE Fellow)", image: "people/current/Post Doc/Shivangi Mittal.jpg", year: "2026", email: "shmi@iitk.ac.in", focus: "center" }
    ]
  },
  alumni: {
    Masters: [
      // Update Masters alumni here. Fields - name, image location, linkedin link, year, focus, zoom (optional)
      { name: "Tanmay Dhavale", image: "people/alumni/MTech/tanmay.jpg", linkedin: "https://www.linkedin.com/in/tanmay-dhavale-b6b369b9/", year: "2012", focus: "center" },
      { name: "Varun Mishra", image: "people/alumni/MTech/varun.JPG", linkedin: "https://www.linkedin.com/in/varmish/", year: "2012", focus: "center" },
      { name: "Anil Mangla", image: "people/alumni/MTech/anilm.jpg", linkedin: "https://www.linkedin.com/in/anilmangla1986/", year: "2013", focus: "center" },
      { name: "Saswati Roy", image: "people/alumni/MTech/saswati.jpg", linkedin: "https://www.linkedin.com/in/saswati-roy/", year: "2013", focus: "center" },
      { name: "Manish Kumar", image: "people/alumni/MTech/manishmu.jpg", linkedin: "https://www.linkedin.com/in/manish-kumar-73aba698/", year: "2014", focus: "center" },
      { name: "Rashmi Mohanty", image: "people/alumni/MTech/rashmi.jpg", linkedin: "https://www.linkedin.com/in/rashmi-mohanty-213086188/", year: "2015", focus: "center" },
      { name: "Sahil Bhandari", image: "people/alumni/MTech/sahil.jpg", linkedin: "https://www.linkedin.com/in/sahilbh/", year: "2015", focus: "center" },
      { name: "Sagar Sourav", image: "people/alumni/MTech/Sagar.jpg", linkedin: "https://www.linkedin.com/in/sagar-sourav-60465128/", year: "2016", focus: "top", zoom: "1.2" },
      { name: "Anika Jain", image: "people/alumni/MTech/anika.jpg", linkedin: "https://www.linkedin.com/in/anika-jain-199a2456/", year: "2016", focus: "center" },
      { name: "Anushka Jha", image: "people/alumni/MTech/anushka.jpg", linkedin: "https://www.linkedin.com/in/anushka-jha-phd/", year: "2017", focus: "top" },
      { name: "Ramanish Singh", image: "people/alumni/MTech/ramanish.jpg", linkedin: "https://www.linkedin.com/in/ramanish148/", year: "2017", focus: "center" },
      { name: "Shashank Kamdar", image: "people/alumni/MTech/shashank.jpg", linkedin: "https://www.linkedin.com/in/skamdar/", year: "2017", focus: "center" },
      { name: "Arpita Sharma", image: "people/alumni/MTech/arpita.jpg", linkedin: "https://www.linkedin.com/in/arpita-sharma-4bb56316b/", year: "2018", focus: "center" },
      { name: "Raghav Kumar", image: "people/alumni/MTech/raghav.jpg", linkedin: "https://www.linkedin.com/in/raghav-kumar-a6774612a/", year: "2019", focus: "center" },
      { name: "Mayank Narsariya", image: "people/alumni/MTech/Mayank.jpeg", linkedin: "https://www.linkedin.com/in/mayank-narsaria-09a05a183/", year: "2022", focus: "center" },
      { name: "Elluru Sairam", image: "people/alumni/MTech/sairam.jpg", linkedin: "[LinkedIn URL]", year: "2014", focus: "center" },
      { name: "Pravin Mali", image: "people/alumni/MTech/Pravin.jpg", linkedin: "", year: "", focus: "center" },
      { name: "Abhigyan Ghosha", image: "people/alumni/MTech/Abhigyan.jpg", linkedin: "", year: "", focus: "center" }


    ],
    PhD: [
      // Update PhD alumni here. Fields - name, image location, linkedin link, website link (optional) year, focus, zoom (optional)
      { name: "Shahin Allahbash", image: "people/alumni/PhD/shahin.jpg", linkedin: "https://www.linkedin.com/in/shahin-a-19bb08a?utm_source=share_via&utm_content=profile&utm_medium=member_android", year: "2012", focus: "center" },
      { name: "Asima Shaukat", image: "people/alumni/PhD/asima.JPG", linkedin: "https://www.linkedin.com/in/asima-shaukat-6574145b?utm_source=share_via&utm_content=profile&utm_medium=member_android", year: "2013", focus: "top" },
      { name: "Susheel Bhandari", image: "people/alumni/PhD/susheel.jpg", linkedin: "https://www.gbpuat.ac.in/colleges/COT/D9/sushil_profile.html", year: "2013", focus: "top" },
      { name: "Manish Kaushal", image: "people/alumni/PhD/manish.JPG", linkedin: "https://www.linkedin.com/in/manish-kaushal-b5663611?utm_source=share_via&utm_content=profile&utm_medium=member_android", website: "https://www.iitkgp.ac.in/department/CH/faculty/ch-mkaushal", year: "2015", focus: "top" },
      { name: "Shweta Jatav", image: "people/alumni/PhD/shweta jatav.jpg", linkedin: "https://www.linkedin.com/in/shweta-jatav-49a43537?utm_source=share_via&utm_content=profile&utm_medium=member_android", year: "2017", focus: "center", zoom: "1.6" },
      { name: "Yogesh Nimdeo", image: "people/alumni/PhD/yn.jpg", linkedin: "https://www.linkedin.com/in/dr-yogesh-nimdeo-06485b10?utm_source=share_via&utm_content=profile&utm_medium=member_android", website: "https://www.iitjammu.ac.in/faculty/~yogeshmadhukarraonimdeo", year: "2017", focus: "top" },
      { name: "Asheesh Shukla", image: "people/alumni/PhD/Asheesh Shukla.JPG", linkedin: "https://www.linkedin.com/in/asheesh-shukla-52889a44?utm_source=share_via&utm_content=profile&utm_medium=member_android", year: "2018", focus: "center", zoom: "1.4" },
      { name: "Tushar Deshpande", image: "people/alumni/PhD/TD.jpg", linkedin: "https://www.linkedin.com/in/dr-tushar-deshpande-a167b8163?utm_source=share_via&utm_content=profile&utm_medium=member_android", year: "2019", focus: "center" },
      { name: "Bhavna Vyas", image: "people/alumni/PhD/Bhavna.jpg", linkedin: "https://www.linkedin.com/in/dr-bhavna-vyas-92052b4a?utm_source=share_via&utm_content=profile&utm_medium=member_android", year: "2020", focus: "top", },
      { name: "Khushboo Suman", image: "people/alumni/PhD/Khushboo.jpg", linkedin: "https://www.linkedin.com/in/khushboo-suman-96430b62?utm_source=share_via&utm_content=profile&utm_medium=member_android", website: "https://che.iitm.ac.in/faculty.php?fname=Dr.+Khushboo+Suman", year: "2020", focus: "top" },
      { name: "Sandeep Kumar", image: "people/alumni/PhD/sandeepkumar.JPG", linkedin: "[LinkedIn URL]", year: "2020", focus: "top" },
      { name: "Mayank Agarwal", image: "people/alumni/PhD/mayank agarwal.jpg", linkedin: "https://www.linkedin.com/in/mayank-agarwal-iitk?utm_source=share_via&utm_content=profile&utm_medium=member_android", year: "2021", focus: "left", zoom: "1.5" },
      { name: "Lakshmi Kushwaha", image: "people/alumni/PhD/lakshmi.jpg", linkedin: "https://www.linkedin.com/in/lakshmi-kushwaha?utm_source=share_via&utm_content=profile&utm_medium=member_android", year: "2023", focus: "center" },
      { name: "Shweta Sharma", image: "people/alumni/PhD/shweta.jpeg", linkedin: "[LinkedIn URL]", year: "2023", focus: "center" },
      { name: "Tulika Bhattacharyya", image: "people/alumni/PhD/tulika.jpg", linkedin: "https://www.linkedin.com/in/tulika-bhattacharyya-phd-012422b0?utm_source=share_via&utm_content=profile&utm_medium=member_android", year: "2023", focus: "center" },
      { name: "Shivangi Mittal", image: "people/alumni/PhD/Shivangi Mittal.jpg", linkedin: "https://www.linkedin.com/in/shivangi-mittal-2627a3149?utm_source=share_via&utm_content=profile&utm_medium=member_android", year: "2026", focus: "center" },
      { name: "Vivek Kumar", image: "people/alumni/PhD/Vivek.jpg", linkedin: "https://www.linkedin.com/in/vivek-kumar-singh-3b1716106?utm_source=share_via&utm_content=profile&utm_medium=member_android", year: "2026", focus: "center" }

    ],
    PostDoc: [
      // Update Post Doc alumni here. Fields - name, image location, linkedin link, focus, zoom (optional)
      { name: "Dr. Nidhi Joshi", image: "people/alumni/PostDoc/nidhij.jpg", linkedin: "https://www.linkedin.com/in/nidhi-j-50ba8a257?utm_source=share_via&utm_content=profile&utm_medium=member_android", year: "[Graduation Year]", focus: "top right", zoom: "1.3" }
    ]
  }
};

function renderPeople(section, program) {
  const container = document.getElementById(`${section}-content`);
  container.innerHTML = '';

  const peopleList = peopleData[section][program];

  peopleList.forEach(person => {
    const card = document.createElement('div');
    card.className = 'person-card';

    let detailsHtml = '';
    if (section === 'current') {
      detailsHtml = `
        <p>Joined: ${person.year}</p>
        <a href="mailto:${person.email}" class="person-link">${person.email}</a>
      `;
    } else {
      let gradYearHtml = program === 'PostDoc' ? '' : `<p>Graduated: ${person.year}</p>`;

      detailsHtml = `
        ${gradYearHtml}
        <div style="display: flex; justify-content: center; gap: 10px; align-items: center;">
          <a href="${person.linkedin}" target="_blank" class="person-link" title="LinkedIn Profile" style="display: inline-block; margin-top: 0.5rem; transition: transform 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='none';">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" style="width: 24px; height: 24px; border-radius: 4px;">
          </a>
        </div>
      `;
    }

    const objectPos = person.focus ? `object-position: ${person.focus}; ` : '';
    const scale = person.zoom ? `transform: scale(${person.zoom}); ` : '';
    const imgStyle = (objectPos || scale) ? ` style="${objectPos}${scale}"` : '';

    const displayName = person.name.replace(/\n/g, '<br>');
    const altName = person.name.replace(/\n/g, ' ');

    let nameHtml = displayName;
    if (person.website) {
      nameHtml = `<a href="${person.website}" target="_blank" style="text-decoration: underline; color: inherit; transition: color 0.3s ease;" onmouseover="this.style.color='var(--secondary-blue)'" onmouseout="this.style.color='inherit'">${displayName}</a>`;
    }

    card.innerHTML = `
      <div class="person-img-wrapper">
        <img src="${person.image}" alt="${altName}"${imgStyle}>
      </div>
      <h3 style="line-height: 1.4;">${nameHtml}</h3>
      ${detailsHtml}
    `;

    container.appendChild(card);
  });
}

function setupTabs(section) {
  const tabsContainer = document.getElementById(`${section}-tabs`);
  const programs = ['PhD', 'Masters', 'PostDoc'];
  let firstNonEmpty = null;

  programs.forEach(program => {
    if (peopleData[section][program] && peopleData[section][program].length > 0) {
      if (!firstNonEmpty) firstNonEmpty = program;

      const btn = document.createElement('button');
      btn.className = 'year-tab-btn tab-btn-styled';
      btn.innerText = program;
      btn.onclick = () => {
        Array.from(tabsContainer.children).forEach(child => child.classList.remove('active'));
        btn.classList.add('active');
        renderPeople(section, program);
      };

      tabsContainer.appendChild(btn);
    }
  });

  if (firstNonEmpty) {
    const firstTab = Array.from(tabsContainer.children).find(btn => btn.innerText === firstNonEmpty);
    if (firstTab) firstTab.click();
  } else {
    document.getElementById(`${section}-content`).innerHTML = '<p class="text-center" style="grid-column: 1 / -1; color: var(--text-gray);">No members in this category yet.</p>';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setupTabs('current');
  setupTabs('alumni');
});
