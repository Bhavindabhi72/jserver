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
//language chane rtl
function rtllang(lng, e) {
  let couldServiceClass = document.getElementsByClassName('cloud-service-row');

  if (lng !== 'english') {
    document.getElementsByTagName('html')[0].setAttribute("class", "direction-rtl");

    if (couldServiceClass.length > 0) {
      callAmChart('rtl')
    }
  } else {
    if (couldServiceClass.length > 0) {
      callAmChart(null)
    }
    document.querySelector('html').classList.remove("direction-rtl");
  }
}
// custom accordion start
$(document).ready(function () {
  $('.tab-a').click(function () {
    $(".tab").removeClass('tab-active');
    $(".tab[data-id='" + $(this).attr('data-id') + "']").addClass("tab-active");
    $(".tab-a").removeClass('active-a');
    $(this).parent().find(".tab-a").addClass('active-a');
  });
});
// custom accordion end

//Invite New User start
window.addEventListener("click", function (e) {
  if (e.target.closest(".wrapper-dropdown") === null) {
    closeAllDropdowns();
  }
});
//Invite New User start
function PermissionsCheck(el) {
  if (el.value == 'choose-permission') {
    document.getElementsByClassName("choose-permissions")[0].classList.remove('d-none');
  } else {
    document.getElementsByClassName("choose-permissions")[0].classList.add('d-none');
  }
}
//Invite New User end


// Password type change start

function maskPassword(input) {
  const value = input.value;
  input.dataset.password = value;
  input.value = '*'.repeat(value.length);
}

// Password type change end




// counter progressbar js start
$(function () {
  $(".progress").each(function () {

    var $bar1 = $(this).find("#blue_curve");
    var $val = $(this).find("span");
    var perc = parseInt($val.text());

    $({ counter: 0 }).animate({ counter: perc }, {
      duration: 3000,
      step: function (p) {
        $bar1.css({
          strokeDashoffset: ((perc * 144) / 100) - 144,
        });
        $val.text(p | 0);
      }
    });
  });
});
// counter progressbar js end
// text editor js start
if ($('#summernote').length) {
  $('#summernote').summernote({
    placeholder: '',
    tabsize: 2,
    height: 100,
    toolbar: [
      ['style', ['style']],
      ['font', ['bold', 'underline', 'clear']],
      ['color', ['color']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['table', ['table']],
      ['insert', ['link', 'picture', 'video']],
      ['view', ['fullscreen', 'codeview', 'help']]
    ],
    fontNames: ['Arial']
  });
}
// text editor js end

//action popup start
var oldId = [];
function toggleActionCard(cardId) {

  if (oldId.length > 0 && oldId[0] != cardId) {
    var cardToToggleOld = document.getElementById(oldId);
    cardToToggleOld.style.display = cardToToggleOld.style.display === 'block' ? 'none' : 'block';
    cardToToggleOld.style.visibility = cardToToggleOld.style.visibility === 'visible' ? 'hidden' : 'visible';
    cardToToggleOld.style.opacity = cardToToggleOld.style.opacity === '1' ? '0' : '1';
    oldId = [];
  }

  var cardToToggle = document.getElementById(cardId);
  if (cardToToggle) {
    cardToToggle.style.display = cardToToggle.style.display === 'block' ? 'none' : 'block';
    cardToToggle.style.visibility = cardToToggle.style.visibility === 'visible' ? 'hidden' : 'visible';
    cardToToggle.style.opacity = cardToToggle.style.opacity === '1' ? '0' : '1';

    if (oldId[0] != cardId) {
      oldId.push(cardId);
    } else {
      oldId = [];
    }
  }
}
//action popup end

// manage nameservers js start
function Nameservers(el) {
  if (el.value == 'use-default') {
    document.getElementsByClassName("use-default")[0].classList.remove('d-none');
    document.getElementsByClassName("use-customs")[0].classList.add('d-none');
  } else if (el.value == 'use-custom') {
    document.getElementsByClassName("use-customs")[0].classList.remove('d-none');
    document.getElementsByClassName("use-default")[0].classList.add('d-none');
  }
}
// manage nameservers js end



// checkout page js start
document.addEventListener('DOMContentLoaded', () => {
  const accountOrders = document.querySelectorAll('input[name="accountOrder"]');
  accountOrders.forEach(accountOrder => {
    accountOrder.addEventListener('change', () => {
      document.querySelectorAll('.account-order-label').forEach(label => {
        label.classList.remove('checked');
      });
      if (accountOrder.checked) {
        document.querySelector(`label[for="${accountOrder.id}"]`).classList.add('checked');
      }
    });
  });

  const radios = document.querySelectorAll('input[name="payment-details"]');
  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      document.querySelectorAll('.payment-detail-label').forEach(label => {
        label.classList.remove('checked');
      });
      if (radio.checked) {
        document.querySelector(`label[for="${radio.id}"]`).classList.add('checked');
      }
    });
  });

});

//Credit hide and show data
function Credit(radio) {
  document.querySelectorAll('.paymentOptions label').forEach(label => {
    label.classList.remove('checked');
  });

  document.querySelectorAll('.your-details-card-form').forEach(form => {
    form.classList.remove('active');
  });

  const formSection = document.querySelector(`.${radio.value}`);
  if (formSection) {
    formSection.classList.add('active');
  }
}

//getCheckoutAccount function use in checkout page for hide and show form
function getCheckoutAccount(value) {
  var element = document.getElementsByClassName("personal-information");
  if (value == 'newaccount') {
    element[0].classList.remove("d-none");
  } else {
    element[0].classList.add("d-none");
  }
}

// checkout page js end


function toggleVisibility(element) {
  var div = document.querySelector('.support-ticket-repaly-body-wraps');
  if (div.classList.contains('open')) {
    div.classList.remove('open');
    element.textContent = '+';
  } else {
    div.classList.add('open');
    element.textContent = '-';
  }
}


document.getElementById('toggle-arrow').addEventListener('click', function() {
  const domainContainer = document.getElementById('domain-container');
  const arrow = document.getElementById('toggle-arrow');

  domainContainer.classList.toggle('hidden');
  arrow.classList.toggle('rotate');
});

document.getElementById('domain-container').classList.remove('hidden');