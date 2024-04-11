<?php
namespace Controllers;
use Vendor\Controller;
use Models\Sponser as SponserModel;

class Sponser extends Controller
{
    private $em;
    public function __construct(){
        $this->em = new SponserModel();
    }
    public function getSponsers(){
        //內容
        if (isset($_POST['sname'])) {
            $sname = $_POST['sname'];
            return $this->em->getSponser($sname);
        } else {
            return $this->em->getSponsers();
        }
    }

    public function newSponser(){
        //內容
        $sname = $_POST['sname'];
        $organiser = $_POST['organiser'];
        $phone = $_POST['phone'];
        $email = $_POST['email'];
        
        $res = $this->em->getSponser($sname);
        if ($res['result'] == NULL){
            return $this->em->newSponser($sname,$organiser,$phone,$email);
        }else{
            return $this->response(409,'已存在');
        }
        
    }

    public function removeSponser(){
        //內容
        $sname = $_POST['sname'];
        return $this->em->removeSponser($sname);
    }
    public function updateSponser(){
        //內容
        $sname = $_POST['sname'];
        $organiser = $_POST['organiser'];
        $phone = $_POST['phone'];
        $email = $_POST['email'];
        return $this->em->updateSponser($sname,$organiser,$phone,$email);
        
    }
   
}



?>