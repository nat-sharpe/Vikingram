var postList = [
    {caption: 'My badass bro', comments: 'Hvars þú böl kannt, kveð þú þér bölvi at ok gef-at þínum fjándum frið.', url: "https://creatureofthewheel.files.wordpress.com/2014/01/vikings-clive-standen.jpg"},
    {caption: 'Gotta love that keel', comments: 'Bú er betra, þótt lítit sé, halr er heima hverr; þótt tvær geitr eigi ok taugreftan sal, þat er þó betra en bæn.', url: "https://s1.1zoom.ru/big0/465/Vikings_(TV_series)_Ships_Viking_ships_513598_1280x854.jpg"},
    {caption: 'Best. Wife. Ever.', comments: 'Fjölkunnigri konu skal-at-tu í faðmi sofa, svá at hon lyki þik liðum.', url: "https://heavyeditorial.files.wordpress.com/2015/02/cast-lagertha.jpg?quality=65&strip=all&w=780"},
    {caption: "Rollo's bad day", comments: "Mörg er góð mær, ef görva kannar, hugbrigð við hali", url: "https://i1.wp.com/www.cgmagonline.com/wp-content/uploads/2014/11/Vikings-Season-2-Brothers-war-1.jpg?ssl=1"},
    {caption: '#family', comments: "Vápnum sínum skal-a maðr velli á feti ganga framar", url: "https://i.pinimg.com/736x/c2/1e/dc/c21edc322f978ad3dd3dcfe7a1b8ae44--vikings-tv-series-vikings-tv-show.jpg"},
    {caption: 'Battle-worn', comments: "At kveldi skal dag leyfa, konu, er brennd er, mæki, er reyndr er, mey, er gefin er, ís, er yfir kemr, öl, er drukkit er.", url: "https://cdna.artstation.com/p/assets/images/images/003/123/998/large/piotr-bieryt-screenshot029-copy.jpg?1469997592"},
    {caption: 'What do the gods intend?', comments: "Ósnjallr maðr hyggsk munu ey lifa, ef hann við víg varask; en elli gefr hánum engi frið, þótt hánum geirar gefi.", url: "https://tojuzbylo.pl/sites/default/files/v4_01_05152015_jh_02484-727x530.jpg"}, 
    {caption: "Couldn't help myself", comments: "Deyr fé, deyja frændr, deyr sjalfr it sama, ek veit einn, at aldrei deyr: dómr um dauðan hvern.", url: "https://racheltsoumbakos.files.wordpress.com/2018/03/aslaug-as-portrayed-by-alyssa-sutherland-in-history-channels-vikings.jpg"},
    {caption: 'My former boss', comments: "At kveldi skal dag leyfa, konu, er brennd er, mæki, er reyndr er, mey, er gefin er, ís, er yfir kemr, öl, er drukkit er.", url: "https://dawnsdressdiary.files.wordpress.com/2013/04/vikings3.jpg?w=640"}
];

var taggedList = [
    {caption: 'How it all started', comments: 'Hvars þú böl kannt, kveð þú þér bölvi at ok gef-at þínum fjándum frið.', url: "http://www.journal.com.ph/media/k2/items/cache/afa65e44694e85c27c262d4077b83508_XL.jpg"},
    {caption: 'Tough love', comments: 'Hvars þú böl kannt, kveð þú þér bölvi at ok gef-at þínum fjándum frið.', url: "https://vikingmoviesinfo.files.wordpress.com/2014/01/vikings-s2-01.jpg"},
    {caption: "Hard day's work", comments: "At kveldi skal dag leyfa, konu, er brennd er, mæki, er reyndr er, mey, er gefin er, ís, er yfir kemr, öl, er drukkit er.", url: "https://vikingsnewsandrecaps.files.wordpress.com/2015/02/v-s03e01-5.jpg"},
    {caption: 'The Lothbrok Bros',comments: "Deyr fé, deyja frændr, deyr sjalfr it sama, ek veit einn, at aldrei deyr: dómr um dauðan hvern.", url: "http://images6.fanpop.com/image/photos/34200000/Ragnar-and-Rollo-vikings-tv-series-34299776-500-333.jpg"},
    {caption: 'Feeling smug', comments: "Ósnjallr maðr hyggsk munu ey lifa, ef hann við víg varask; en elli gefr hánum engi frið, þótt hánum geirar gefi.", url: "https://i.pinimg.com/originals/3c/1e/f1/3c1ef159cff58486ab984f8063333b79.jpg"},
    {caption: 'Feeling nervous', comments: "At kveldi skal dag leyfa, konu, er brennd er, mæki, er reyndr er, mey, er gefin er, ís, er yfir kemr, öl, er drukkit er.", url: "https://vignette.wikia.nocookie.net/beyond-good-and-evil-burning-wheel/images/4/4f/Alexander_Frisk.jpg/revision/latest?cb=20131009031750"},
    {caption: 'Nothing like a cold one', comments: "Mörg er góð mær, ef görva kannar, hugbrigð við hali", url: "https://i.ytimg.com/vi/qgTAajmpNiA/hqdefault.jpg"},  
    {caption: "The English coin", comments: "Deyr fé, deyja frændr, deyr sjalfr it sama, ek veit einn, at aldrei deyr: dómr um dauðan hvern.", url: "http://www.patriciabracewell.com/wp-content/uploads/2016/12/4.12.Coin_-1.jpg"}, 
    {caption: 'Flirting with danger', comments: 'Bú er betra, þótt lítit sé, halr er heima hverr; þótt tvær geitr eigi ok taugreftan sal, þat er þó betra en bæn.', url: "https://i.pinimg.com/originals/81/62/1b/81621b0da89aa4502c3e0c444d80e43d.jpg"}
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
    modalComments.text(neighborImage.comments);
    currentImageIndex = i + direction;
};

var clickCloseModal = function() {
    modal.removeClass("show-modal");

};

var clickModalBackground = function (event) {
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