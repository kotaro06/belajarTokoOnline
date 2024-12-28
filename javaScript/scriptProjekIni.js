const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

  function tutupModal() {
          let modal = document.getElementById("exampleModal");
          const modalInstance = bootstrap.Modal.getInstance(modal); // Get modal instance
           modalInstance.hide(); 
        }