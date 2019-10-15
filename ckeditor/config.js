/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	config.allowedContent = true;
  config.extraPlugins += (config.extraPlugins.length == 0 ? '' : ',') + 'ckeditor_wiris';
  var folder_path='http://localhost/2019/ck';
  config.filebrowserBrowseUrl = folder_path+'/kcfinder/browse.php?opener=ckeditor&type=files';
  config.filebrowserImageBrowseUrl = folder_path+'/kcfinder/browse.php?opener=ckeditor&type=images';
  config.filebrowserFlashBrowseUrl = folder_path+'/kcfinder/browse.php?opener=ckeditor&type=flash';
  config.filebrowserUploadUrl = folder_path+'/kcfinder/upload.php?opener=ckeditor&type=files';
  config.filebrowserImageUploadUrl = folder_path+'/kcfinder/upload.php?opener=ckeditor&type=images';
  config.filebrowserFlashUploadUrl = folder_path+'/kcfinder/upload.php?opener=ckeditor&type=flash';
	 
 
};
