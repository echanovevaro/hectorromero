let container = document.getElementById("container")
let resultados = [] // Declare the "resultados" variable as an empty array

export const getData = async () => {
  fetch("https://hectoromero.es/obras")
    .then((response) => response.json())
    .then((json) => {
      resultados = json.value
      console.log(resultados)

      resultados.forEach((res) => {
        res.forEach((r) => {
          console.log(r)
          console.log(r)
        })
      })
      return resultados
    })
}
