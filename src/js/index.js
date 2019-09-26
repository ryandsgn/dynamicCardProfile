import "../style/index.scss";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 */
function render(variablesz = {}) {
  let name = `${variablesz.name}`;
  let lastname = `${variablesz.lastname}`;
  let role = `${variablesz.role}`;
  let country = `${variablesz.country}`;
  let city = `${variablesz.city}`;
  let instagram = `${variablesz.instagram}`;
  let twitter = `${variablesz.twitter}`;
  let linkedin = `${variablesz.linkedin}`;
  let github = `${variablesz.github}`;
  let socialMediaPosition = `${variablesz.socialMediaPosition}`;

  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variablesz.background}" /></div>`;
  let githubLink = `${variablesz.github}`;
  if (variablesz.includeCover == false) cover = "<div class='cover'></div>";
  if (variablesz.name == null) variablesz.name = " ";
  if (variablesz.lastname === null) variablesz.lastname = "    ";
  if (variablesz.role === null) variablesz.role = "Occupation";
  if (variablesz.city == "  ") variablesz.city.value;
  if (variablesz.country == "  ") variablesz.country.value;
  if (variablesz.instagram == "something") variablesz.instagram = "   ";
  if (variablesz.twitter === "something") variablesz.twitter = "   ";
  if (variablesz.linkedin === "something") variablesz.linkedin = "   ";
  if (variablesz.github === "something") variablesz.github = "   ";

  if (variablesz.city == "Munich") {
    variablesz.country = "Germany";
  }
  if (variablesz.city == "Miami") {
    variablesz.country = "USA";
  }
  if (variablesz.city == "Caracas") {
    variablesz.country = "Venezuela";
  }
  if (variablesz.city == "Toronto") {
    variablesz.country = "Canada";
  }

  if (variablesz.country == "Germany") {
    variablesz.city = "Munich";
  }
  if (variablesz.country == "USA") {
    variablesz.city = "Miami";
  }
  if (variablesz.country == "Venezuela") {
    variablesz.city = "Caracas";
  }
  if (variablesz.country == "Canada") {
    variablesz.city = "Toronto";
  }

  if (socialMediaPosition != "right") {
    socialMediaPosition = "left";
  }

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
${cover}
          <img src="${window.variablesz.avatarURL}" class="photo" />
          <h1>${variablesz.name} ${variablesz.lastname}</h1>
          <h2>${variablesz.role}</h2>
          <h3>${variablesz.city} ${variablesz.country}</h3>

          <ul class=${variablesz.socialMediaPosition}>
            <li><a href="https://twitter.com/${
              variablesz.twitter
            }"><i class="fa fa-twitter"></i></a></li>

            <li><a href="https://github.com/${
              variablesz.github
            }"><i class="fa fa-github"></i></a></li>

            <li><a href="https://linkedin.com/${
              variablesz.linkedin
            }"><i class="fa fa-linkedin"></i></a></li>

            <li><a href="https://instagram.com/${
              variablesz.instagram
            }"><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variablesz = {
    // if includeCover is true the algorithm should
    includeCover: false,
    // this is the url of the image that will used as background for the profile cover
    background:
      "https://cdn.pixabay.com/photo/2012/03/04/00/43/architecture-22039_1280.jpg",
    // this is the url for the profile avatar
    avatarURL:
      "https://scontent-lht6-1.cdninstagram.com/v/t51.2885-15/e35/49858319_312445676051439_827303459566360947_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_cat=103&se=7&oh=cf1f9a2643edac3512bd03bf8a70caa6&oe=5E3C7F6C&ig_cache_key=MTk2MDUzNDcxNTg0MjEwNDU3Ng%3D%3D.2",
    // social media bar position (left or right)
    socialMediaPosition: "right",

    // social media usernames
    twitter: "something",
    github: "something",
    linkedin: "something",
    instagram: "something",
    name: null,
    lastname: null,
    role: null,
    country: " country ",
    city: " city "
  };
  render(window.variablesz);
  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == ""
          ? null
          : this.value == "true"
            ? true
            : this.value == "false"
              ? false
              : this.value;
      render(Object.assign(window.variablesz, values));
    });
  });
};
