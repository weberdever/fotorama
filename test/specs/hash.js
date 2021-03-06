document.write(
	'<div class="fotorama" data-hash="true" id="fotorama">' +
		'<img src="test/i/okonechnikov/1-lo.jpg">' +
		'<img src="test/i/okonechnikov/2-lo.jpg">' +
		'<img src="test/i/okonechnikov/9-lo.jpg" id="9-lo">' +
		'<div>The fourth sequence</div>' +
		'<div id="fifth">Fifth</div>' +
	'</div>'
);

describe('Hash', function () {
	var $fotorama, fotorama;

	beforeEach(function () {
		$fotorama = $fotorama || $('#fotorama');
		fotorama = fotorama || $fotorama.data('fotorama');
	});

	it('hash is empty', function () {
		expect(location.hash).toBe('');
	});

  it('hash is a number', function () {
		// hacky alternative for fotorama.show('>');
    $('.fotorama__arr--next', $fotorama).mousedown().mouseup();

    waitsFor(function () {
      return location.hash === '#2';
    }, 'wait for a new hash', 400);

    runs(function () {
      expect(location.hash).toBe('#' + (fotorama.activeIndex + 1));
    });
	});

  it('hash is an id', function () {
		fotorama.show({index: '>', time: 0});

    expect(location.hash).toBe('#9-lo');
	});

  it('hash is a number for a html-frame', function () {
		fotorama.show({index: '>', time: 0});

    expect(location.hash).toBe('#4');
	});

  it('hash is an id for a html-frame', function () {
		fotorama.show({index: '>', time: 0});

    expect(location.hash).toBe('#fifth');
	});
});