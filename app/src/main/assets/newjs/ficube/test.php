<?php
$data = $_POST['jsonobj'];
if(!$data || !isset($data['BLOCK'])){
	return false;
}else{
	$data = guolv($data['BLOCK']);
	for ($i=0; $i < count($data); $i++) { 
		$data[$i] = testnext($data[$i]);
	}
	var_dump($data);exit;
}

function guolv($data)
{
	foreach ($data as $k => $v) {
		if(isset($v['id'])){
			unset($data[$k]['id']);
		}

		if(isset($v['x'])){
			unset($data[$k]['x']);
		}

		if(isset($v['y'])){
			unset($data[$k]['y']);
		}
	}

	return $data;
}

function testnext($data)
{
	if(isset($data['NEXT'])){
		unset($data['NEXT']['BLOCK']['id']);
		testnext($data['NEXT']['BLOCK']);
	}else{
		return $data;
	}
}
?>