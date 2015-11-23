$(document).ready(function () {
    $('#fullpage').fullpage({
        //Custom selectors
        sectionSelector: '.vertical-scrolling',
        slideSelector: '.horizontal-scrolling',
        
        //Design
        controlArrows: true,
        continuousVertical: false,
        resize: false,
        loopBottom: true,
        
        //Navigation
        menu: '#myMenu',
        lockAnchors: false,
        anchors: ['HomePage', 'AboutMe', 'MyProjects', 'ContactMe'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['Home Page', 'About Me', 'My Projects', 'Contact Me'],
        showActiveTooltip: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom'
    });
});