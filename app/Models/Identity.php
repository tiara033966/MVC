<?php
namespace Models;
use Vendor\DB;

class Identity{
    public function getIdentitys(){
        $sql = "SELECT  *  FROM  `identity` ";
        $args =NULL;
        return DB::select($sql,$args);
    }
    public function getIdentity($id){
        $sql = "SELECT  *  FROM  `identity` WHERE `id`=?";
        $args = array($id);
        return DB ::select($sql,$args);
    }
    public function getRoles($id){
        $sql = "SELECT  `role_id`  FROM  `user_role` WHERE `identity_id`=?";
        $arg = array($id);
        $response = DB::select($sql, $arg);
        $result = $response['result'];
        for ($i=0; $i < count($result); $i++) { 
            $result[$i] = $result[$i]['role_id'];    
        }
        $response['result'] = $result;
        return $response;

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
    public function newIdentity($id,$password){
        $sql = "INSERT INTO `identity` (`id`, `password`) VALUES (?, ?)";
        return DB::insert($sql, array($id,$password));
    }
    public function removeIdentity($id){
        $sql = "DELETE FROM `identity` WHERE id=?";
        return DB::delete($sql, array($id));
    }
    public function updateIdentity($id,$password){
        $sql = "UPDATE `identity` SET  `password`=? WHERE id=?";
        return DB::update($sql, array($password,$id));
    }
}



?>