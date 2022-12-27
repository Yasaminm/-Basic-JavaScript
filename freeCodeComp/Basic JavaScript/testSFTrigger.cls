// public without sharing class Propoerty_Auto_Numbering{ 

    list<Property__c> propertiesToUpdate = new list<Property__c>();

    Id city = 'a1b1i000007BpGnAAK';
    Id brandId = 'a0P1i000005szkdEAA';

    list<Property__c> propertiesByCity = new list<Property__c>();

     if (city != null) {    
        propertiesByCity = [SELECT Property_Number__c, BrandRef__c FROM Property__c WHERE City_object__c=:city and BrandRef__c=:brandId ORDER BY Name ASC]; 
        
        if(propertiesByCity.size() > 0) {
            Integer i = 253;
            for(Property__c prty: propertiesByCity){
                if(prty.BrandRef__c == brandId){
                    i = i + 1;
                    prty.Property_reNumbering__c = i;
                    propertiesToUpdate.add(prty);
                }
            }
    
            update propertiesToUpdate;
        }
    }
 
// }

////////////////////////

list<Apartment__c> apartmentsToBeUpdated = new list<Apartment__c>();

    Id propertyId = 'a011i00000ej4jVAAQ';

    list<Apartment__c> apartmentsByProperty = new list<Apartment__c>();

     if (propertyId != null) {    
        apartmentsByProperty = [SELECT Apartment_Number__c FROM Apartment__c WHERE PropertyRef__c=:propertyId AND Apartment_Number__c =: null ORDER BY Name ASC]; 
        
        if(apartmentsByProperty.size() > 0) {
            Integer i = 0;
            for(Apartment__c apt: apartmentsByProperty){
                if(apt.Apartment_Number__c == null){
                    i = i + 1;
                    apt.Apartment_Number__c = i;
                    apartmentsToBeUpdated.add(apt);

                }
            }
    
            update apartmentsToBeUpdated;
        }
    }

    //////////////////////
    //Apartment Numbering according to their floor
    list<Apartment__c> apartmentsToBeUpdated = new list<Apartment__c>();

    Id propertyId = 'a011i00000TKPAHAA5';

    list<Apartment__c> apartmentsByProperty = new list<Apartment__c>();

     if (propertyId != null) {    
        apartmentsByProperty = [SELECT Apartment_Number__c FROM Apartment__c WHERE PropertyRef__c=:propertyId ORDER BY FloorPick__c ASC]; 
        
        if(apartmentsByProperty.size() > 0) {
            Integer i = 0;
            for(Apartment__c apt: apartmentsByProperty){
                    i = i + 1;
                    apt.Apartment_Number__c = i;
                    apartmentsToBeUpdated.add(apt);

            }
    
            update apartmentsToBeUpdated;
        }
    }