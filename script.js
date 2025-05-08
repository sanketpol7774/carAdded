function car() {
  alert('car booked');
  var fromAddress = document.getElementById('fromAddress').value ||"gfds" ;
  var toAddress = document.getElementById('toAddress').value ||"gfds" ;
  var phoneNumber = document.getElementById('phoneNumber').value || "asdfg";
  var TravelDate = document.getElementById('TravelDate').value || "werty";
  var carName = document.getElementById('carName').value || "abc";

  fetch('http://localhost:4001/addcar', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(
       { fromAddress: fromAddress,
        toAddress: toAddress,
        phoneNumber: phoneNumber,
        TravelDate: TravelDate,
        SelectCars: carName}
      )
  })
  .then(response => response.json())
.then(data => {
alert("Car booked successfully!");
})
.catch(error => {
});
}




























