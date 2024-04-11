<?php
namespace Controllers;

use Vendor\Controller;
use Models\Raceinfo as RaceinfoModel;

class Raceinfo extends Controller {
    private $em;

    public function __construct(){
        $this->em = new RaceinfoModel();
    }

    public function getRaceinfo(){
        // 內容
        if (isset($_POST['rid'])) {
            $rid = $_POST['rid'];
            return $this->em->getRaceinfo($rid);
        } else {
            return $this->em->getRaceinfos();
        } 
    }

    public function newRaceinfo(){
        // 內容
        $rid = $_POST['rid'];
        $rname = $_POST['rname'];
        $rloc = $_POST['rloc'];
        $plimit = $_POST['plimit'];
        $date = $_POST['date'];
        $category = $_POST['category'];

        $res = $this->em->getRaceinfo($rid);

        if ($res['result'] == NULL){
            return $this->em->newRaceinfo($rid,$rname,$rloc,$plimit,$date,$category);
        } else {
            return $this->response(409,'已存在');
        }
    }

    public function removeRaceinfo(){
        // 內容
        $rid = $_POST['rid'];
        return $this->em->removeRaceinfo($rid);
    }

    public function updateRaceinfo(){
        // 內容
        $rid = $_POST['rid'];
        $rname = $_POST['rname'];
        $rloc = $_POST['rloc'];
        $plimit = $_POST['plimit'];
        $date = $_POST['date'];
        $category = $_POST['category'];

        return $this->em->updateRaceinfo($rid, $rname, $rloc, $plimit, $date, $category);
    }
}

?>