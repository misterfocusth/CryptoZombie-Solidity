var abi = /* abi สร้างโดย compiler */
var ZombieFeedingContract = web3.eth.contract(abi)
var contractAddress = /* ส่วนนี้คือ address ของ contract หลังจากที่นำมาปรับใช้บน Ethereum  */
var ZombieFeeding = ZombieFeedingContract.at(contractAddress)

// สมมติว่าเรามี ID ของซอมบี้และ ID ของ kitty ที่เราต้องการที่จะจู่โจมแล้ว
let zombieId = 1;
let kittyId = 1;

// To get the CryptoKitty's image, we need to query their web API. This
// information isn't stored on the blockchain, just their webserver.
// If everything was stored on a blockchain, we wouldn't have to worry
// about the server going down, them changing their API, or the company 
// blocking us from loading their assets if they don't like our zombie game ;)
let apiUrl = "https://api.cryptokitties.co/kitties/" + kittyId
$.get(apiUrl, function(data) {
  let imgUrl = data.image_url
  // เพื่อให้แสดงรูปภาพออกมา
})

// เมื่อผู้ใช้ทำการคลิกที่ตัว kitty:
$(".kittyImage").click(function(e) {
  // เรียกใช้ method `feedOnKitty` ของ contract
  ZombieFeeding.feedOnKitty(zombieId, kittyId)
})

// สำหรับการรับฟัง (listen) อีเว้นท์ NewZombie ที่จะมาจาก contract ของเรา เพื่อจะสามารถแสดงมันออกมาได้:
ZombieFactory.NewZombie(function(error, result) {
  if (error) return
  // ฟังก์ชั่นนี้จะใช้ในการแสดงซอมบี้ เหมือนในบทเรียนที่ 1 :
  generateZombie(result.zombieId, result.name, result.dna)
})