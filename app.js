var app = angular.module('foodOrderingApp', []);

app.controller('MainController', function ($scope) {

    $scope.menu = [
        {name: 'Pizza', price: 9.99, image: 'pizza.jpg'},
        {name: 'Burger', price: 5.99, image: 'burger.jpg'},
        {name: 'Pasta', price: 7.99, image: 'pasta.jpg'},
        {name: 'Pav Bhaji', price: 6, image: 'pav bhaji.jpg'},
        {name: 'Pani Puri', price: 12, image: 'pani puri.jpg'},
        {name: 'Ramen', price: 8, image: 'ramen.jpg'},
        {name: 'Sandwich', price: 15, image: 'sandwich.jpg'},
        {name: 'Ice Cream', price: 4, image: 'ice-cream.jpg'},
        {name: 'Milkshake', price: 5, image: 'milkshake.jpg'}
    ];

    $scope.order = [];

    $scope.addToOrder = function (item) {
        $scope.order.push(item);
    };

    $scope.removeFromOrder = function (item) {
        var index = $scope.order.indexOf(item);
        if (index > -1) {
            $scope.order.splice(index, 1);
        }
    };

    $scope.calculateTotal = function () {
        var total = 0;
        angular.forEach($scope.order, function (item) {
            total += item.price;
        });
        return total;
    };

    $scope.placeOrder = function () {
        alert('Order placed successfully!');
    };
});

