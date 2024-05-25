// custom select dropdown start
function wrapperdropdown() {
  const selectedAll = document.querySelectorAll(".wrapper-dropdown")
  selectedAll.forEach((selected) => {
    const optionsList = selected.querySelectorAll("div.wrapper-dropdown li");

    selected.addEventListener("click", () => {
      let arrow = selected.children[1];

      if (selected.classList.contains("active")) {
        handleDropdown(selected, arrow, false);
      } else {
        let currentActive = document.querySelector(".wrapper-dropdown.active");

        if (currentActive) {
          let anotherArrow = currentActive.children[1];
          handleDropdown(currentActive, anotherArrow, false);
        }

        handleDropdown(selected, arrow, true);
      }
    });

    // update the display of the dropdown
    for (let o of optionsList) {
      o.addEventListener("click", () => {
        selected.querySelector(".selected-display").innerHTML = o.innerHTML;
      });
    }
  });

// check if anything else ofther than the dropdown is clicked
window.addEventListener("click", function (e) {
  if (e.target.closest(".wrapper-dropdown") === null) {
    closeAllDropdowns();
  }
});
}
// close all the dropdowns
function closeAllDropdowns() {
  const selectedAll = document.querySelectorAll(".wrapper-dropdown");
  selectedAll.forEach((selected) => {
    const optionsContainer = selected.children[2];
    let arrow = selected.children[1];

    handleDropdown(selected, arrow, false);
  });
}

// open all the dropdowns
function handleDropdown(dropdown, arrow, open) {
  if (open) {
    arrow.classList.add("rotated");
    dropdown.classList.add("active");
  } else {
    arrow.classList.remove("rotated");
    dropdown.classList.remove("active");
  }
}
// custom select dropdown end
wrapperdropdown() 
var i = 1;
document.querySelector('.add-storage-link').addEventListener("click", function () {
  wrapperdropdown();
    const coutnclass = i++;

  document.querySelector(".ssdstorage > .wrapper-dropdown:last-child").insertAdjacentHTML('afterend', `<div class="wrapper-dropdown addnumber${coutnclass}" id="dropdown">
<span class="selected-display" id="destination"
  >Pick an option!</span
>
<span class="d-flex cross-icon-add-storage" id="crossIconAddStorage" onclick="removeSSD(${coutnclass},event)"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.66131 0.338794C10.107 0.784456 10.107 1.50297 9.66131 1.94863L6.60535 5.00005L9.66131 8.05602C10.107 8.50168 10.107 9.2202 9.66131 9.66586C9.21565 10.1115 8.49714 10.1115 8.05147 9.66586L5.00005 6.60989L1.94409 9.66586C1.49842 10.1115 0.779908 10.1115 0.334246 9.66586C-0.111415 9.2202 -0.111415 8.50168 0.334246 8.05602L3.39021 5.00005L0.334246 1.94409C-0.111415 1.49842 -0.111415 0.779908 0.334246 0.334246C0.779908 -0.111415 1.49842 -0.111415 1.94409 0.334246L5.00005 3.39021L8.05602 0.334246C8.49714 -0.106868 9.2202 -0.106868 9.66131 0.338794Z" fill="currentColor"></path>
  </svg>
  </span>
<svg
  class="arrow"
  id="drp-arrow"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="transition-all ml-auto rotate-180"
>
  <path
    d="M7 14.5l5-5 5 5"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  ></path>
</svg>
<ul class="dropdown">
  <li class="item remove-item">
    20 GB
  </li>
  <li class="item remove-item">
    10 GB
  </li>
  <li class="item remove-item">
    30 GB
  </li>
  <li class="item remove-item">
    2 GB
  </li>
</ul>
</div>`)
wrapperdropdown();
});


// tab start
$(document).ready(function(){
	
  $('.clickme a').click(function(){
      $('.clickme a').removeClass('active');
      $(this).addClass('active');
      var tagid = $(this).data('tag');
      $('.list').removeClass('active').addClass('hide');
      $('#'+tagid).addClass('active').removeClass('hide');
  });
});

// tab end

function removeSSD(id,e){
  document.querySelector(".addnumber"+id).remove()
}