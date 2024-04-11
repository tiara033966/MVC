<?php
namespace Models;
use Vendor\DB;

class Raceinfo{
    public function getRaceinfos(){
        $sql = "SELECT  *  FROM  `raceinfo`";
        $args = NULL;
        return DB::select($sql,$args);
    }
    public function getRaceinfo($rid){
        $sql = "SELECT  *  FROM  `raceinfo` WHERE `rid` = ?";
        $args=array($rid);
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
    public function newRaceinfo($rid,$rname,$rloc,$plimit,$date,$category){
        $sql = "INSERT INTO `raceinfo` (`rid`, `rname`,`rloc`,`plimit`,`date`,`category`) VALUES (?, ?,?,?,?,?)";
        return DB::insert($sql, array($rid,$rname,$rloc,$plimit,$date,$category));
    }
    public function removeRaceinfo($rid){
        $sql = "DELETE FROM `raceinfo` WHERE `rid`=?";
        return DB::delete($sql, array($rid));
    }
    public function updateRaceinfo($rid,$rname,$rloc,$plimit,$date,$category){
        $sql = "UPDATE `raceinfo` SET `rname`=? ,`rloc`=?,`plimit`=?,`date`=?,`category`=? WHERE `rid`=?";
        return DB::update($sql, array($rname,$rloc,$plimit,$date,$category,$rid));
    }







}

?>