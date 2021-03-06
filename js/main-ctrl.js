angular.module('mainApp').controller('mainCtrl', function mainCtrl($scope, $document, $timeout, mainServ) {

  var i;
  var introText = 'Stars of David';
  
  function handleInto() {
    var elm;
    for (i = 0; i < 3; i++) {
      elm = $document[0].getElementById('intro-star-' + i);
      elm.style['transition'] = '1s ease all ' + (i*2000) + 'ms';
      elm.style['opacity'] = '1';
    }
    for (i = 0; i < introText.length; i++) {
      elm = $document[0].getElementById('intro-letter-' + i);
      elm.style['transition'] = '5s ease all ' + (6000 + i*100) + 'ms';
      elm.style['opacity'] = '1';
    }
    $timeout(function() {
      $document[0].getElementById('intro-panel').style['opacity'] = '0';
      $timeout(function() {
        $document[0].getElementById('intro-panel').style['display'] = 'none';
        $document[0].getElementById('main-panel').style['opacity'] = 1;
      }, 1000);
    }, 11000);  
  }

  function skipInto() {
    var elm;
    $document[0].getElementById('intro-panel').style['display'] = 'none';
    $document[0].getElementById('main-panel').style['opacity'] = 1;
  }

  $scope.model = {
    introTextLetters : [],
  	headerTitle: 'Stars of David',
  	threeStarDesc: 'Strong identity / Jewish mother / converted',
  	twoStarDesc: 'Mild identity / Jewish father / childhood',
  	oneStarDesc: 'Weak identity / Jewish grandparent / origin',
    items: [],
    footerByText: 'Stars of David by Uri Kalish',
    footerContactText: 'contact@stars-of-david.com'
  };

  for (i = 0; i < introText.length; i++) {
    $scope.model.introTextLetters.push({index: i, text: introText.charAt(i)});
  }

  $scope.model.items = mainServ.getItems();

  $timeout(function() {
    skipInto();
  }, 0);

});
