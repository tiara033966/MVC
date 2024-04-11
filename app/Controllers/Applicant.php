<?php
namespace Controllers;
use Vendor\Controller;
use Models\Applicant as ApplicantModel;

class Applicant extends Controller
{
    private $em;
    public function __construct(){
        $this->em = new ApplicantModel();
    }
    public function getApplicants(){
        //內容
        if (isset($_POST['name'])) {
            $name = $_POST['name'];
            return $this->em->getApplicant($name);
        } else {
            return $this->em->getApplicants();
        }
    }

    public function newApplicant(){
        //內容
        $name = $_POST['name'];
        $age = $_POST['age'];
        $phone = $_POST['phone'];
        $email = $_POST['email'];
        $category = $_POST['category'];
        $catenum = $_POST['catenum'];        
        $res = $this->em->getApplicant($name);
        if ($res['result'] == NULL){
            return $this->em->newApplicant($name,$age,$phone,$email,$category,$catenum);
        }else{
            return $this->response(409,'已存在');
        }
        
    }

    public function removeApplicant(){
        //內容
        $name = $_POST['name'];
        return $this->em->removeApplicant($name);
    }
    public function updateApplicant(){
        //內容
        $name = $_POST['name'];
        $age = $_POST['age'];
        $phone = $_POST['phone'];
        $email = $_POST['email'];
        $category = $_POST['category'];
        $catenum = $_POST['catenum'];   
        return $this->em->updateApplicant($name,$age,$phone,$email,$category,$catenum);
        
    }
    
    public function findRaceByCategory(){
        if (isset($_POST['category'])) {
            $category = $_POST['category'];
            return $this->em->findRace($category);
        } else {
            return $this->response(400, '請提供類別');
        }
    }
    
  
   
}



?>