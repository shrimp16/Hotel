var mainpage = document.getElementById("mainpage");
var roomsearchpage = document.getElementById("roomsearchpage");
var selectObject = document.getElementById("formsubmit");
var searchbody = document.getElementById("searchbody");
var goToMainPage = document.getElementById("gotomainpage");
var mainPageImages = document.getElementById("toprooms");

window.onload = () => {
    var roomRow = document.createElement("div");
    roomRow.innerHTML = ` <div class="rooms">
    <div class="img-wrapper">
        <img class="blur" src="img/hotel-do-caracol-room-hc_suite-quarto-11.jpg">
        <div class="content fade">
            <P>Lorem ipsum dolor sit amet.</P>
            <button id="toproom1" class="buttons">See more!</button>
        </div>
    </div>
    <div class="img-wrapper">
        <img class="blur" src="img/hotel-do-caracol-room-quarto-double-standard-vista-mar1.jpg">
        <div class="content fade">
            <p>Lorem ipsum dolor sit amet.</p>
            <button id="toproom2" class="buttons">See more!</button>
        </div>
    </div>
    <div class="img-wrapper">
        <img class="blur" src="img/hotel-do-caracol-room-room-22.jpg">
        <div class="content fade">
            <p>Lorem ipsum dolor sit amet.</p>
            <button id="toproom3" class="buttons">See more!</button>
        </div>
    </div>
</div>`;
mainPageImages.appendChild(roomRow);
}

$("#know-more").click(() => {
  mainpage.style.display = "none";
  roomsearchpage.style.display = "block";
})

$("#gotomainpage").click(() => {
  mainpage.style.display = "block";
  roomsearchpage.style.display = "none";
  searchbody.innerHTML = "";
  document.getElementById("extraspace").style.display = "none";
})

$("#formsubmit").click(() => {
  var x = document.getElementById("roomstype").value;

  //`api/${x}`;

  var roomRow = document.createElement("div");
  roomRow.innerHTML = `
  <div class="rooms">
            <div class="img-wrapper">
                <img class="blur" src="img/hotel-do-caracol-room-hc_suite-quarto-11.jpg">
                <div class="content fade">
                    <P>Lorem ipsum dolor sit amet.</P>
                    <button id="toproom1" class="buttons">See more!</button>
                </div>
            </div>
            <div class="img-wrapper">
                <img class="blur" src="img/hotel-do-caracol-room-quarto-double-standard-vista-mar1.jpg">
                <div class="content fade">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <button id="toproom2" class="buttons">See more!</button>
                </div>
            </div>
            <div class="img-wrapper">
                <img class="blur" src="img/hotel-do-caracol-room-room-22.jpg">
                <div class="content fade">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <button id="toproom3" class="buttons">See more!</button>
                </div>
            </div>
        </div>

        <div class="rooms">
            <div class="img-wrapper">
                <img class="blur" src="img/hotel-do-caracol-room-hc_suite-quarto-11.jpg">
                <div class="content fade">
                    <P>Lorem ipsum dolor sit amet.</P>
                    <button id="toproom1" class="buttons">See more!</button>
                </div>
            </div>
            <div class="img-wrapper">
                <img class="blur" src="img/hotel-do-caracol-room-quarto-double-standard-vista-mar1.jpg">
                <div class="content fade">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <button id="toproom2" class="buttons">See more!</button>
                </div>
            </div>
            <div class="img-wrapper">
                <img class="blur" src="img/hotel-do-caracol-room-room-22.jpg">
                <div class="content fade">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <button id="toproom3" class="buttons">See more!</button>
                </div>
            </div>
        </div>
        `;

  searchbody.append(roomRow);

  document.getElementById("extraspace").style.display = "block";
})