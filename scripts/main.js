var imagesList = [
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
var lightBoxCloseButton = document.querySelector('.close-button');
var lightBoxImage = document.querySelector('.big-image');
var title = document.querySelector('.title');
var comments = document.querySelector('.comments');
var arrowLeft = document.querySelector('.arrow-left');
var arrowRight = document.querySelector('.arrow-right');
var currentImageIndex = 0;

var changeLightBoxImage = function(direction) {
    var i = currentImageIndex;
    var neighborImage = imagesList[i + direction];
    lightBoxImage.setAttribute('src', neighborImage.url);
    title.textContent = neighborImage.caption;
    comments.textContent = neighborImage.comments;
    currentImageIndex = (i + direction);
};

var nextImage = function () {
    changeLightBoxImage(1)
};
var previousImage = function () {
    changeLightBoxImage(-1)
};

var clickCloseLightBox = function() {
    lightBox.classList.remove("show-modal");
};

var clickLightBoxBackground = function (event) {
    if (event.target === lightBox) {
        clickCloseLightBox();
    }
};

lightBox.addEventListener("click", clickLightBoxBackground);
arrowRight.addEventListener('click', nextImage);
arrowLeft.addEventListener('click', previousImage);

for (var i = 0; i < imagesList.length; i++) {

    (function() {
        var thumbnail = document.createElement('img');
        var image = imagesList[i];
        var currentI = i;
        var thumbnailBox = document.createElement('div');

        var clickOpenLightBox = function() {
            lightBoxImage.setAttribute('src', image.url);
        
            lightBox.classList.toggle("show-modal");
            title.textContent = image.caption;
            comments.textContent = image.comments;

            currentImageIndex = currentI;
        
            lightBoxCloseButton.addEventListener('click', clickCloseLightBox);
        };

        thumbnailBox.classList.add("thumbnail-box");

        var thumbnailCaption = document.createElement('p');
        thumbnailCaption.textContent = image.caption;
        thumbnailCaption.classList.add("thumbnail-caption");
        thumbnailBox.appendChild(thumbnailCaption);
        thumbnailBox.addEventListener('click', clickOpenLightBox);

        thumbnail.setAttribute('src', image.url);
        thumbnail.classList.add("thumbnail");


        var listItem = document.createElement('li');
        listItem.classList.add("image-container");

        listItem.appendChild(thumbnail);
        listItem.appendChild(thumbnailBox);
        container.appendChild(listItem);
    })();
};




