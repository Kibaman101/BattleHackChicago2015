var apiKey = "8b1810ae022c4ff882defa579251fb22";
 
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/1274330687/", true);
xhr.setRequestHeader("X-API-Key", apiKey);
 
xhr.onreadystatechange = function(){
 if(this.readyState === 4 && this.status === 200){
  var json = JSON.parse(this.responseText);
  console.log(json.Response.data.inventoryItem.itemName); //Gjallarhorn
 }
}
 
xhr.send();