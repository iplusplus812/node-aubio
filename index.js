var ffi = require('ffi');
var ref = require('ref');

var intPtr = ref.refType('int');
var stringPtr = ref.refType(ref.types.CString);

var aubio = ffi.Library('libaubio', {
	// beattracking / misc
	"new_aubio_beattracking": [ "pointer", [ "int", "int", "int"]],
	"aubio_beattracking_do": [ "void", [ "pointer", "pointer", "pointer"]],
	"aubio_beattracking_get_bpm": [ "float", ["pointer"]],
	"aubio_filter_do": [ "void", [ "pointer", "pointer" ]],
	"new_aubio_filter_a_weighting": [ "pointer", [ "int" ]],

	// source
	"new_aubio_source": [ "pointer", [ "string", "int", "int" ]],
	"aubio_source_do": [ "void", [ "pointer", "pointer", intPtr ]],
	"aubio_source_do_multi": [ "void", [ "pointer", "pointer", intPtr ]],
	"aubio_source_get_samplerate": [ "int", [ "pointer" ]],
	"aubio_source_get_channels": [ "int", [ "pointer" ]],
	"aubio_source_seek": [ "int", [ "pointer", "int" ]],
	"aubio_source_close": [ "int", [ "pointer" ]],
	"del_aubio_source": [ "void", [ "pointer" ]],


	// fvec
	"new_fvec": [ "pointer", [ "int" ]],
	"del_fvec": [ "void", [ "pointer" ]],
	"fvec_get_sample": [ "float", [ "pointer", "int" ]],
	"fvec_set_sample": [ "void", [ "pointer", "float", "int" ]],
	"fvec_get_data": [ "float", [ "pointer" ]],
	"fvec_print": [ "void", [ "pointer" ]],
	"fvec_set_all": [ "void", [ "pointer", "float" ]],
	"fvec_zeros": [ "void", [ "pointer" ]],
	"fvec_rev": [ "void", [ "pointer" ]],
	"fvec_weight": [ "void", [ "pointer", "pointer" ]],
	"fvec_copy": [ "void", [ "pointer", "pointer" ]],
	"fvec_ones": [ "void", [ "pointer" ]],
});

module.exports = aubio;