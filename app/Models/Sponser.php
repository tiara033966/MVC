<?php
namespace Models;
use Vendor\DB;

class Sponser{
    public function getSponsers(){
        $sql = "SELECT  *  FROM  `sponser`";
        $args = NULL;
        return DB::select($sql,$args);
    }
    public function getSponser($sname){
        $sql = "SELECT  *  FROM  `sponser` WHERE `sname` = ?";
        $args=array($sname);
        return DB ::select($sql,$args);

    }
    public function checkIdPw($id,$pw){
        $sql = "SELECT  *  FROM  `identity` WHERE `id`=?  and `password`=?";
        $arg = array($id,$pw);
        $response = DB::select($sql, $arg);
        $rows = $response['result'];
        if(count($rows)==0){
            $response['status'] = 404;
            $response['message']  = 'Not found';
        }
        return $response;
    }


    public function newSponser($sname,$organiser,$phone,$email){
        $sql = "INSERT INTO `sponser` (`sname`, `organiser`, `phone`, `email`) VALUES (?, ?, ?, ?)";
        return DB::insert($sql, array($sname,$organiser,$phone,$email));
    }
    public function removeSponser($sname){
        $sql = "DELETE FROM `sponser` WHERE sname=?";
        return DB::delete($sql, array($sname));
    }
    public function updateSponser($sname,$organiser,$phone,$email){
        $sql = "UPDATE `sponser` SET `organiser`=?, `phone`=?, `email`=? WHERE `sname`=?";
        return DB::update($sql, array($organiser, $phone, $email, $sname));
    }
    

}
?>
