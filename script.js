function playStation(station) {
    const live1 = document.getElementById('live-1');
    const live2 = document.getElementById('live-2');

    if ( station == 1 ){
        live1.classList.add('play');
        live1.classList.remove('pause');
        live2.classList.remove('play');
        live2.classList.add('pause');
        return;
    }if ( station == 2 ) {
        live2.classList.add('play');
        live2.classList.remove('pause');
        live1.classList.remove('play');
        live1.classList.add('pause');
        return;
    } else {
        console.log("station number not vaild", station);
        return;
    }
}

function setFilter(el, filter) {
    //remove active class from other filters
    var active = document.querySelectorAll('.active-filter');
    console.log(active);
    for (let i = 0; i < active.length; i++) {
        active[i].classList.remove('active-filter');
        active[i].classList.add('hide');
        console.log(i);
    }

    //add active to selected filter
    el.classList.add('active-filter');
    document.getElementById(filter).classList.add('active-filter');
    document.getElementById(filter).classList.remove('hide');
    el.classList.remove('hide');
}
function play() {
    document.getElementById('nav').classList.add('play');
}
function closeplay() {
    document.getElementById('nav').classList.remove('play');
}