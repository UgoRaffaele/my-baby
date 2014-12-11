<?php

	function base64_to_jpeg($base64_string, $output_file) {

		$imageData = base64_decode($base64_string);
		$source = imagecreatefromstring($imageData);
		$imageSave = imagejpeg($source, $output_file, 90);
		imagedestroy($source);

		return $output_file; 

	}

?>
