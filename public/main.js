var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var thumbDown = document.getElementsByClassName("fa-thumbs-down");
var trash = document.getElementsByClassName("fa-trash");

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const restaurant = this.parentNode.parentNode.childNodes[1].innerText
        const favoriteOrder = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)

        fetch('thumbUp', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'restaurant': restaurant,
            'favoriteOrder': favoriteOrder,
            'thumbUp':thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          // console.log(data)
          window.location.reload(true)
        })
      });
});
//thumbs down
Array.from(thumbDown).forEach(function(element) {
      element.addEventListener('click', function(){
        const restaurant = this.parentNode.parentNode.childNodes[1].innerText
        const favoriteOrder = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('thumbDown', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'restaurant': restaurant,
            'favoriteOrder': favoriteOrder,
            'thumbUp':thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        console.log("click event working")
        const restaurant = this.parentNode.parentNode.childNodes[1].innerText
        const favoriteOrder = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        console.log(restaurant + favoriteOrder + thumbUp)
        console.log(restaurant)
        fetch('restaurants', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'restaurant': restaurant,
            'favoriteOrder': favoriteOrder
          })
        }).then(function (response) {
          console.log(response)
          window.location.reload()
        })
      });
});
