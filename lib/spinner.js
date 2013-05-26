Template.spinner.rendered = function(){
  var target = document.getElementById('spinner');
  var spinner = new Spinner(Meteor.Spinner.options).spin(target);
};

Meteor.Spinner = {
    options: {
        lines: 13, // The number of lines to draw
        length: 8, // The length of each line
        width: 3, // The line thickness
        radius: 12, // The radius of the inner circle
        corners: 1, // Corner roundness (0..1)
        rotate: 0, // The rotation offset
        direction: 1, // 1: clockwise, -1: counterclockwise
        color: '#000', // #rgb or #rrggbb
        speed: 1.2, // Rounds per second
        trail: 60, // Afterglow percentage
        shadow: false, // Whether to render a shadow
        hwaccel: false, // Whether to use hardware acceleration
        className: 'spinner', // The CSS class to assign to the spinner
        zIndex: 2e9, // The z-index (defaults to 2000000000)
        top: 'auto', // Top position relative to parent in px
        left: 'auto' // Left position relative to parent in px
    }
};
