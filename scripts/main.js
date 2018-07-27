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

var mainContent = $('.main-content');
var postButton = $('.post-button');
var taggedButton = $('.tagged-button');
var thumbList = $('.thumbnail-list');
var modal = $('.modal');
var modalImage = $('.modal-image');
var modalTitle = $('.modal-title');
var modalComments = $('.modal-comments');
var modalCloseButton = $('.close-button');
var arrowLeft = $('.arrow-left');
var arrowRight = $('.arrow-right');
var currentImageIndex = 0;

var changeModalImage = function(direction) {
    var i = currentImageIndex;
    var neighborImage = postList[i + direction];
    modalImage.attr('src', neighborImage.url);
    modalTitle.text(neighborImage.caption);
    modalComments.text(neighborImage.modalComments);
    currentImageIndex = i + direction;
};

var clickCloseModal = function() {
    console.log('background clicked');
    modal.removeClass("show-modal");

};

var clickModalBackground = function (event) {
    console.log($(event.target))
    console.log(modal)
    if (event.target === modal[0]) {
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
    if (event.target === postButton[0]) {
        chooseList(postList);
    }
    else if (event.target === taggedButton[0]) {
        chooseList(taggedList);    
    }
};

modal.on('click', clickModalBackground);
arrowRight.on('click', nextImage);
arrowLeft.on('click', previousImage);
$(window).on('keydown', arrowKeys);
postButton.on('click', toggleImages);
taggedButton.on('click', toggleImages);

var chooseList = function (whichList) {
    var listDisplayed = $('<ul>');

   
    mainContent.empty(mainContent.children);

    console.log(mainContent)
    listDisplayed.addClass('thumbnail-list');
    mainContent.append(listDisplayed);

    var showList = function (image, i) {
        var thumbnail = $('<li>');
        var thumbImage = $('<img>');
        var thumbHover = $('<div>');
        var thumbCaption = $('<p>');
        var currentI = i;

        thumbnail.addClass("thumbnail");
        thumbImage.attr('src', image.url);
        thumbImage.addClass("thumb-image");
        thumbHover.addClass("thumb-hover");
        thumbCaption.text(image.caption);
        thumbCaption.addClass("thumb-hover-caption");

        thumbHover.append(thumbCaption);
        thumbnail.append(thumbImage);
        thumbnail.append(thumbHover);
        listDisplayed.append(thumbnail);

        var clickOpenModal = function() {
            modalImage.attr('src', image.url);
            modal.addClass("show-modal");
            modalTitle.text(image.caption);
            modalComments.text(image.comments);
            modalCloseButton.on('click', clickCloseModal);
            currentImageIndex = currentI;
        };

        thumbnail.on('click', clickOpenModal);
    };

    whichList.forEach(showList);
}

chooseList(postList);