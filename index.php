<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>A Simple Page with CKEditor</title>
        <!-- Make sure the path to CKEditor is correct. -->
        <script src="ckeditor/ckeditor.js"></script>
    </head>
    <body>
        <form type='post'>
            <textarea name="editor1" id="editor1" rows="10" cols="80">This is is my textarea to be replaced with CKEditor.</textarea>
            <button type="Submit">Post</button>
        </form>
        <script>
            CKEDITOR.replace( 'editor1' );
        </script>
    </body>
</html>