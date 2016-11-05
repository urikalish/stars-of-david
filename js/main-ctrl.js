angular.module('mainApp').controller('mainCtrl', function mainCtrl($scope, $document, $timeout, mainServ) {

  var i;
  var introText = 'Stars of David';
  
  $scope.model = {
    introTextLetters : [],
  	headerTitle: 'Stars of David',
  	threeStarDesc: 'Strong identity / Jewish mother / converted',
  	twoStarDesc: 'Mild identity / Jewish father / childhood',
  	oneStarDesc: 'Weak identity / Jewish grandparent / origin',
    items: [],
    footerText: 'by Uri Kalish'
  };

  for (i = 0; i < introText.length; i++) {
    $scope.model.introTextLetters.push({index: i, text: introText.charAt(i)});
  }

  $scope.model.items = mainServ.getItems();

  $timeout(function() {
    var elm;
    for (i = 0; i < introText.length; i++) {
      elm = $document[0].getElementById('intro-letter-' + i);
      elm.style['transition'] = '5s ease all ' + (i*100) + 'ms';
      elm.style['opacity'] = '1';
    }
    for (i = 0; i < 3; i++) {
      elm = $document[0].getElementById('intro-star-' + i);
      elm.style['transition'] = '5s ease all ' + (1500 + i*250) + 'ms';
      elm.style['opacity'] = '1';
    }
  }, 2500);

  $timeout(function() {
    $document[0].getElementById('intro-panel').style['opacity'] = '0';
    $timeout(function() {
      $document[0].getElementById('intro-panel').style['display'] = 'none';
      $document[0].getElementById('main-panel').style['opacity'] = 1;
    }, 1000);
  }, 9000);

});
