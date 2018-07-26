var postList = [
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

var taggedList = [
    {caption: '#GoodOldDays', url: "https://resizing.flixster.com/JrRJCIaeXSfvvvThwlZu9xCveYg=/2304x1536/v1.dDsxNTQ3MTI7ajsxNzc3NjsxMjAwOzIzMDQ7MTUzNg"},
    {caption: 'Me and the gang', comments: 'Hanging out before the big battle is Wessex. Too much fun.', url: "https://pmcvariety.files.wordpress.com/2014/02/vikings-tv-review.jpg?w=1000&h=563&crop=1"},
    {caption: 'Cool ships', comments: 'So cool... Floki is a genius. Check out those keels!', url: "https://prod-cdn-history-co-uk.s3.amazonaws.com/s3fs-public/vikings-main_0.jpg?jSru47BGLuEeljFBrRffvoPMkqfnyRzV"},
    {caption: 'Babe', comments: 'What more can I say? ', url: "https://heavyeditorial.files.wordpress.com/2015/02/cast-lagertha.jpg?quality=65&strip=all&w=780"},
    {caption: 'Crazy friend with axes', comments: "Don't mess with Floki. He's a great guy but sometimes the lights are on but nobody's home", url: "https://celebvogue.com/wp-content/uploads/2017/11/Vikings-Season-2-Floki-official-picture-vikings-tv-series-37651177-2655-3543-767x1024.jpg"},
    {caption: 'Old dude I killed', comments: "The previous Earl. Love/hate him. Now he's in Valhalla", url: "https://dawnsdressdiary.files.wordpress.com/2013/04/vikings3.jpg?w=640"},
    {caption: 'My bro', url: "https://www.factinate.com/wp-content/uploads/2017/10/36-4.jpg"},  
    {caption: 'Fun day at the beach', url: "https://www.returndates.com/backgrounds/vikings.jpg"}, 
    {caption: 'New hairstyle', url: "https://cdn1.thr.com/sites/default/files/imagecache/gallery_landscape_887x500/2017/01/VikingsTVTravisFimmel_photofestH2017.jpg"}
];

var mainContent = document.querySelector('.main-content');
var postButton = document.querySelector('.post-button');
var taggedButton = document.querySelector('.tagged-button');
var thumbList = document.querySelector('.thumbnail-list');
var modal = document.querySelector('.modal');
var modalImage = document.querySelector('.modal-image');
var modalTitle = document.querySelector('.modal-title');
var modalComments = document.querySelector('.modal-comments');
var modalCloseButton = document.querySelector('.close-button');
var arrowLeft = document.querySelector('.arrow-left');
var arrowRight = document.querySelector('.arrow-right');
var currentImageIndex = 0;

var changeModalImage = function(direction) {
    var i = currentImageIndex;
    var neighborImage = postList[i + direction];
    modalImage.setAttribute('src', neighborImage.url);
    modalTitle.textContent = neighborImage.caption;
    modalComments.textContent = neighborImage.modalComments;
    currentImageIndex = i + direction;
};

var clickCloseModal = function() {
    modal.classList.remove("show-modal");
};

var clickModalBackground = function (event) {
    if (event.target === modal) {
        clickCloseModal();
    }
};

var nextImage = function () {
    if (currentImageIndex === (postList.length - 1)) {
        currentImageIndex = 0;
        changeModalImage(0);
    }
    else {
        changeModalImage(1)
    }
};

var previousImage = function () {
    if (currentImageIndex === 0) {
        currentImageIndex = (postList.length - 1);
        changeModalImage(0);
    }
    else {
        changeModalImage(-1);
    }
};

var arrowKeys = function (event) {
    if (event.key === 'ArrowLeft') {
        previousImage();
    }
    else if (event.key === 'ArrowRight') {
        nextImage();
    }
}

var toggleImages = function () {
    if (event.target === postButton) {
        chooseList(postList);
    }
    else if (event.target === taggedButton) {
        chooseList(taggedList);    
    }
};

modal.addEventListener("click", clickModalBackground);
arrowRight.addEventListener('click', nextImage);
arrowLeft.addEventListener('click', previousImage);
window.addEventListener('keydown', arrowKeys);
postButton.addEventListener('click', toggleImages);
taggedButton.addEventListener('click', toggleImages);

var chooseList = function (whichList) {
    var listDisplayed = document.createElement('ul');

    while (mainContent.firstChild) {
        mainContent.removeChild(mainContent.firstChild);
    }

    listDisplayed.classList.add('thumbnail-list');
    mainContent.appendChild(listDisplayed);

    var showList = function (image, i) {
        var thumbnail = document.createElement('li');
        var thumbImage = document.createElement('img');
        var thumbHover = document.createElement('div');
        var thumbCaption = document.createElement('p');
        var currentI = i;

        thumbnail.classList.add("thumbnail");
        thumbImage.setAttribute('src', image.url);
        thumbImage.classList.add("thumb-image");
        thumbHover.classList.add("thumb-hover");
        thumbCaption.textContent = image.caption;
        thumbCaption.classList.add("thumb-hover-caption");

        thumbHover.appendChild(thumbCaption);
        thumbnail.appendChild(thumbImage);
        thumbnail.appendChild(thumbHover);
        listDisplayed.appendChild(thumbnail);

        var clickOpenModal = function() {
            modalImage.setAttribute('src', image.url);
            modal.classList.add("show-modal");
            modalTitle.textContent = image.caption;
            modalComments.textContent = image.comments;
            modalCloseButton.addEventListener('click', clickCloseModal);
            currentImageIndex = currentI;
        };

        thumbnail.addEventListener('click', clickOpenModal);
    };

    whichList.forEach(showList);
}

chooseList(postList);