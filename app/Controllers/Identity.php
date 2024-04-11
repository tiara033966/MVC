<?php
namespace app\Controllers;
use Vendor\Controller;
use Models\Identity as IdentityModel;
class Identity extends Controller{
    private $em;
    public function __construct(){
        $this->em = new IdentityModel();
    }
    public function getIdentitys(){
        //內容
        if (isset($_POST['id'])) {
            $id = $_POST['id'];
            return $this->em->getIdentity($id);
        } else {
            return $this->em->getIdentitys();
        }      
    }

    public function newIdentity(){
        //內容
        $id = $_POST['id'];
        $password = $_POST['password'];

        $res = $this->em->getIdentity($id);
        if ($res['result'] == NULL){
            return $this->em->newIdentity($id,$password);
        }else{
            return $this->response(409,'已存在');
        }
    }

    public function removeIdentity(){
        //內容
        $id = $_POST['id'];
        return $this->em->removeIdentity($id);
    }

    public function updateIdentity(){
        //內容
        $id = $_POST['id'];
        $password = $_POST['password'];
        return $this->em->updateIdentity($id,$password);

    }
}
?>