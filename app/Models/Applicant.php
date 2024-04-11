<?php
namespace Models;
use Vendor\DB;

class Applicant{
    public function getApplicants(){
        $sql = "SELECT  *  FROM  `applicantinfo` ";
        $args =NULL;
        return DB::select($sql,$args);
    }
    public function getApplicant($name){
        $sql = "SELECT  *  FROM  `applicantinfo` WHERE `name`=?";
        $args = array($name);
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
    public function newApplicant($name,$age,$phone,$email,$category,$catenum){
        $sql = "INSERT INTO `applicantinfo` (`name`, `age`, `phone`, `email`, `category`,`catenum`) VALUES (?, ?, ?, ?, ?,?)";
        return DB::insert($sql, array($name,$age,$phone,$email,$category,$catenum));
    }
    public function removeApplicant($name){
        $sql="DELETE FROM `applicantinfo` WHERE `name`=?";
        return DB::delete($sql, array($name));
    }
    public function updateApplicant($name,$age,$phone,$email,$category,$catenum){
        $sql = "UPDATE `applicantinfo` SET `age`=?, `phone`=?, `email`=?, `category`=?, `catenum`=? WHERE `name`=?";
        return DB::update($sql, array($age,$phone,$email,$category,$catenum,$name));
    }
    
    public function findRace($category){
        $sql = "SELECT * FROM `raceinfo` WHERE `category`=?";
        $args = array($category);
        return DB::select($sql, $args);
    }
}

?>