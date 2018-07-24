

var images = [
    {caption: 'Me and the gang', comments: 'Hanging out before the big battle is Wessex. Too much fun.', url: "https://pmcvariety.files.wordpress.com/2014/02/vikings-tv-review.jpg?w=1000&h=563&crop=1"},
    {caption: 'Cool ships', comments: 'So cool... Floki is a genius. Check out those keels!', url: "https://prod-cdn-history-co-uk.s3.amazonaws.com/s3fs-public/vikings-main_0.jpg?jSru47BGLuEeljFBrRffvoPMkqfnyRzV"},
    {caption: 'Babe', comments: 'What more can I say? ', url: "https://heavyeditorial.files.wordpress.com/2015/02/cast-lagertha.jpg?quality=65&strip=all&w=780"},
    {caption: 'Crazy friend with axes', comments: "Don't mess with Floki. He's a great guy but sometimes the lights are on but nobody's home", url: "https://celebvogue.com/wp-content/uploads/2017/11/Vikings-Season-2-Floki-official-picture-vikings-tv-series-37651177-2655-3543-767x1024.jpg"},
    {caption: 'Old dude I killed', comments: "The previous Earl. Love/hate him. Now he's in Valhalla", url: "https://dawnsdressdiary.files.wordpress.com/2013/04/vikings3.jpg?w=640"},
    {caption: 'My bro', url: "https://www.factinate.com/wp-content/uploads/2017/10/36-4.jpg"},  
    {caption: 'Fun day at the beach', url: "https://www.returndates.com/backgrounds/vikings.jpg"}, 
    {caption: 'New hairstyle', url: "https://cdn1.thr.com/sites/default/files/imagecache/gallery_landscape_887x500/2017/01/VikingsTVTravisFimmel_photofestH2017.jpg"},
    {caption: '#GoodOldDays', url: "https://resizing.flixster.com/JrRJCIaeXSfvvvThwlZu9xCveYg=/2304x1536/v1.dDsxNTQ3MTI7ajsxNzc3NjsxMjAwOzIzMDQ7MTUzNg"}
];


var container = document.querySelector('.image-list');
var lightBox = document.querySelector('.modal');
var popUp = document.querySelector('.modal-content');
var close = document.querySelector('.close-button');
var bigImage = document.querySelector('.big-image');
var title = document.querySelector('.title');
var comments = document.querySelector('.comments');
var left = document.querySelector('.arrow-left');
var right = document.querySelector('.arrow-right');


var closeClick = function() {
    lightBox.classList.remove("show-modal");
};

var nextImage = function() {
    var index = Number(bigImage.getAttribute('data-index'));
    var image = images[index + 1];
    bigImage.setAttribute('src', image.url);
    bigImage.setAttribute('data-index', index + 1);
    title.textContent = image.caption;
    comments.textContent = image.comments;
};

var previousImage = function() {
    var index = Number(bigImage.getAttribute('data-index'));
    var image = images[index - 1];
    bigImage.setAttribute('src', image.url);
    bigImage.setAttribute('data-index', index - 1);
    title.textContent = image.caption;
    comments.textContent = image.comments;
};

function windowOnClick(event) {
    console.log(event.target);
    if (event.target === event.currentTarget) {
        closeClick();
    }
}

var handleClick = function(event) {
    event.preventDefault();
    var index = event.currentTarget.getAttribute('data-index')
    var image = images[index]
    bigImage.setAttribute('src', image.url);
    bigImage.setAttribute('data-index', index);

    lightBox.classList.toggle("show-modal");


    title.textContent = image.caption;
    comments.textContent = image.comments;

    close.addEventListener('click', closeClick);

};

lightBox.addEventListener("click", windowOnClick);
right.addEventListener('click', nextImage);
left.addEventListener('click', previousImage);

for (var index = 0; index < images.length; index++) {

    var newImage = document.createElement('img');
    var image = images[index];


    var captionBox = document.createElement('div');
    captionBox.classList.add("thumbnail-box");

    var caption = document.createElement('p');
    caption.textContent = image.caption;
    caption.classList.add("thumbnail-caption");
    captionBox.appendChild(caption);
    captionBox.addEventListener('click', handleClick);
    captionBox.setAttribute('data-index', index);

    newImage.setAttribute('src', image.url);
    newImage.classList.add("thumbnail");


    var listItem = document.createElement('li');
    
    listItem.appendChild(newImage);
    listItem.appendChild(captionBox);
    container.appendChild(listItem);
};




