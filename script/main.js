"useStrict";

// Variables
const hamburger = document.querySelector("#hamburger");
const closeBtn = document.querySelector("#close_icon");
const menu = document.querySelector(".menu-space");
const linkSpace = document.querySelector(".menu_links");
const menuLinks = document.querySelectorAll(".menu_link");
const seeMore = document.querySelector('#show');
const seeLess = document.querySelector('#hide');


const modalItems = [
  `<img src="./Assets/all3d_logo.jpg" alt="All 3D logo" />
  <div>
    <h3>All 3D</h3>
    <p>
      The best YT channel to access step by step tutorial on 3D
      modelling and design. Theirawesome course outline helped achieve
      the best results for our students.
    </p>
  </div>`,
  `<div>
  <img src="./Assets/alison_logo.jpg" alt="Alison Logo" />
</div>
<div>
  <h3>Alison</h3>
  <p>
    A renowed provider of the world's best free courses. Thus, they
    really came in handy with course planning and layoutting
  </p>
</div>`,
  `   <div>
<img src="./Assets/google.jpg" alt="Alison Logo" />
</div>
<div>
<h3>Google</h3>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
  amet ut dicta at culpa nostrum debitis ab exercitationem ratione
  perferendis
</p>
</div>`,
];

// Functions
const displayMenu = () => {
  menu.style.width = "50vw";
  closeBtn.style.display = "block";
  linkSpace.style.display = "flex";
};
const closeMenu = () => {
  menu.style.width = "0vw";
  closeBtn.style.display = "none";
  linkSpace.style.display = "none";
};

// Implementations
menuLinks.forEach((el) => el.addEventListener("click", closeMenu));
hamburger.addEventListener("click", displayMenu);
closeBtn.addEventListener("click", closeMenu);

//Modal
let modalDisplay = () => {
  document.querySelector("#modal1").innerHTML = modalItems[0];
  document.querySelector("#modal2").innerHTML = modalItems[1];
  document.querySelector("#modal3").innerHTML = modalItems[2];
};

//show more
seeMore.addEventListener('click', ()=> {
  seeMore.innerHTML = `See Less <span class="fa fa-arrow-up"></span>`;
})

var indicator = 1;
seeMore.addEventListener('click', ()=> {
  if(indicator == 1) {
    seeMore.innerHTML = `See Less <span class="fa fa-arrow-up"></span>`;
    document.querySelector("#modal3").style.display = 'grid';
    indicator = 2;
  }
  else {
    seeMore.innerHTML = `See More <span class="fa fa-arrow-down"></span>`;
    document.querySelector("#modal3").style.display = 'none';
    indicator = 1;
  }
})
