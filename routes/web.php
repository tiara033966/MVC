<?php
    $router->register('getSponsers','Sponser','getSponsers');
    $router->register('newSponser','Sponser','newSponser');
    $router->register('updateSponser','Sponser','updateSponser');
    $router->register('removeSponser','Sponser','removeSponser');

    $router->register('getRaceinfo','Raceinfo','getRaceinfo');
    $router->register('newRaceinfo','Raceinfo','newRaceinfo');
    $router->register('updateRaceinfo','Raceinfo','updateRaceinfo');
    $router->register('removeRaceinfo','Raceinfo','removeRaceinfo');

    $router->register('getApplicants','Applicant','getApplicants');
    $router->register('newApplicant','Applicant','newApplicant');
    $router->register('updateApplicant','Applicant','updateApplicant');
    $router->register('removeApplicant','Applicant','removeApplicant');

    $router->register('getIdentitys','Identity','getIdentitys');
    $router->register('newIdentity','Identity','newIdentity');
    $router->register('updateIdentity','Identity','updateIdentity');
    $router->register('removeIdentity','Identity','removeIdentity');
?>