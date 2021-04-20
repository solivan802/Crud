const cars = [{
    id:1,
    marca: "NISSAN",
    modelo: "KICKS",
    color: "Gris",
    año: "2020",
    precio: "$20,000",

}, {
    id:2,
    marca: "TOYOTA",
    modelo: "C-RH",
    color: "Azul",
    año: "2021",
    precio: "$25,000",
}, {
    id:3,
    marca: "HYUNDAI",
    modelo: "SANTA FE",
    color: "Roja",
    año: "2019",
    precio: "$18,000",
}]

/*********************Muestra la informacion*******************************/
function print(information) {
    const container = document.getElementById('Information')
    container.innerHTML = '';
    information.forEach((cars) => {
        const htmlcars = ` <tr>
                                <td>${cars.marca}</td>
                                <td>${cars.modelo}</td>
                                <td>${cars.color}</td>
                                <td>${cars.año}</td>
                                <td>${cars.precio}</td>
                                <td>
                                <button type="button" class="btn btn-outline-danger " onclick="deleteCars(${cars.id})">Eliminar</button>
                                <button type="button" class="btn btn-outline-warning" onclick="editCars(${cars.id})">Editar</button>
                                </td>
                                
                            <tr>`
    container.innerHTML += htmlcars;
        
    });
}
/********************Muestra el Formulario*******************************/

/*******Agrega y edita los modelos***********/
function addModel(){
    const inputMarca = document.getElementById("Marca");
    const carsMarca = inputMarca.value;
    const inputModelo = document.getElementById("Modelo");
    const carsModelo = inputModelo.value;
    const inputColor = document.getElementById("Color");
    const carsColor = inputColor.value;
    const inputAño = document.getElementById("Año");
    const carsAño = inputAño.value;
    const inputPrecio = document.getElementById("Precio");
    const carsPrecio = inputPrecio.value; 
    
    
    const newCars = {
        id: generateId(),
        marca: carsMarca,
        modelo: carsModelo,
        color: carsColor,
        año: carsAño,
        precio: carsPrecio,
    }
    cars.push(newCars);
    print(cars)
    resetForm();
    hideForm();
  
}
/**Elimina usuario ****/
function generateId(){
    let biggerId = 0;
    cars.forEach((cars) => {
        if (cars.id > biggerId) {
            biggerId = cars.id;
        }
    })
    return biggerId + 1;
}
function deleteCars(id) {
    const index = cars.findIndex((cars) => cars.id === id);
    cars.splice(index, 1);
    print(cars);
}
function editCars(id){
    const index = cars.findIndex((cars) => cars.id === id);
    const car = cars[index];
     document.getElementById("Marca").value = car.marca;
     document.getElementById("Modelo").value = car.modelo;
     document.getElementById("Color").value = car.color;
     document.getElementById("Año").value = car.año;
     document.getElementById("Precio").value = car.precio;
     showForm();
     changeButton ();


}
function resetForm () {
    document.getElementById("car-crud").reset();
}
function hideForm() {
    document.getElementById("Show-Form").classList.add("d-none");
}
function showForm() {
    document.getElementById("Show-Form").classList.remove("d-none");
    ChangeB ();
}
function changeButton () {
    const changeB = document.getElementById("btn-form");
    changeB.innerHTML ="Editar";
    changeB.classList.remove("btn-secondary");
    changeB.classList.add("btn-outline-warning");
}
function ChangeB () {
    const changeB = document.getElementById("btn-form");
    changeB.innerHTML ="ENVIAR";
    changeB.classList.remove("btn-outline-warning");
    changeB.classList.add("btn-secondary");
    

}
print(cars);