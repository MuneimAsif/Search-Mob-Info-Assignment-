  $(document).ready(function(){
    $('.dropdown-submenu a.test').on("click", function(e){
      $(this).next('ul').toggle();
      e.stopPropagation();
      e.preventDefault();
    });
  });
let mobiles = [
    {
        Brand: "Samsung",
        Model: "A30",
        Price: "40000",
        Camera: "40px",
        Ram: "8gb",
        Rom : "128gb"
    },
    {
        Brand: "Samsung",
        Model: "A10",
        Price: "40000",
        Camera: "40px",
        Ram: "4gb",
        Rom : "128gb"
    },
    {
        Brand: "Samsung",
        Model: "A20",
        Price: "40000",
        Camera: "40px",
        Ram: "4gb",
        Rom : "128gb"
    },
    {
        Brand: "Vivo",
        Model: "Y20",
        Price: "20000",
        Camera: "40px",
        Ram: "2gb",
        Rom : "32gb"
    },
    {
        Brand: "Vivo",
        Model: "Y11",
        Price: "20000",
        Camera: "40px",
        Ram: "3gb",
        Rom : "32gb"
    },
    {
        Brand: "Vivo",
        Model: "Y15",
        Price: "30000",
        Camera: "40px",
        Ram: "4gb",
        Rom : "64gb"
    },
    {
        Brand: "Motorola",
        Model: "123",
        Price: "5000",
        Camera: "2px",
        Ram: "2gb",
        Rom : "32gb"
    },
    {
        Brand: "Iphone",
        Model: "12",
        Price: "300000",
        Camera: "40px",
        Ram: "8gb",
        Rom : "128gb"
    },
    {
        Brand: "Iphone",
        Model: "13",
        Price: "300000",
        Camera: "40px",
        Ram: "8gb",
        Rom : "128gb"
    },
    {
        Brand: "Iphone",
        Model: "X",
        Price: "300000",
        Camera: "40px",
        Ram: "8gb",
        Rom : "128gb"
    },]
var hea = document.getElementById("hea")
var data = document.getElementById("data")
function model(name){
    let ex = mobiles.filter((filter) => filter.Model == name)
    let exb = ex.map((x) => x.Brand);
    let exm = ex.map((x) => x.Model);
    let exram = ex.map((x) => x.Ram);
    let exrom = ex.map((x) => x.Rom);
    let excamera = ex.map((x) => x.Camera);
    let exprice = ex.map((x) => x.Price);
    hea.innerHTML = exm
    // let exB = ex.filter((filter) => filter.brand)
    
    data.innerHTML = `<div class="mainCard card border-danger  mx-auto" style="max-width: 30rem; font-size: 20px">
    <div class="card-header bg-transparent p-3 border-danger text-center exb">brand : ${exb}</div>
    <div class="card-header bg-transparent p-3 border-danger text-center exm">model : ${exm}</div>
<div class="card-header bg-transparent p-3 border-danger text-center exram">ram : ${exram}</div>
<div class="card-header bg-transparent p-3 border-danger text-center exrom">rom : ${exrom}</div>
<div class="card-header bg-transparent p-3 border-danger text-center excamera">camera : ${excamera}</div>
<div class="card-header bg-transparent p-3 border-danger text-center exprice">price : ${exprice}</div>
    </div>`
}