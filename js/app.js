(function (){
    
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', BuyController)
    .controller('AlreadyBoughtController', BoughtController)
    .service('ShoppingListCheckOffService', CheckOffService);
    
    BuyController.$inject = ['ShoppingListCheckOffService'];
    BoughtController.$inject = ['ShoppingListCheckOffService'];

    function BuyController(ShoppingListCheckOffService){
        var buy = this;
        buy.items = ShoppingListCheckOffService.getShoppingItems();
        buy.buyItem = function(index){
            ShoppingListCheckOffService.buyItem(index);
        }
    }

    function BoughtController(ShoppingListCheckOffService){
        var bought = this;
        bought.items = ShoppingListCheckOffService.getboughtItems();
    }

    function CheckOffService(){
        var checkListService = this;
        var ShoppingItems = [];
        var boughtItems = [];

        checkListService.buyItem = function(index){
            boughtItems.push(ShoppingItems[index]);
            ShoppingItems.splice(index, 1);
        }

        checkListService.getShoppingItems = function(){
            return ShoppingItems;
        }

        checkListService.getboughtItems = function(){
            return boughtItems;
        }

        function addItem(itemName, itemQty){
            var item = {
                name : itemName,
                quantity: itemQty
            };

            ShoppingItems.push(item);
        }

        var init = function(){
            addItem("Cookies", "10");
            addItem("Apple", "2");
            addItem("orange", "20");
            addItem("coffee", "3");
            addItem("milk", "4");
            addItem("rice", "10");
        }
        init();
    }
})();