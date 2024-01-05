public with sharing class AccountClass {
  @AuraEnabled
  public static Account getAccount(String accountId) {
    Account a = [
      SELECT Name, Phone, Fax, ShippingAddress
      FROM Account
      WHERE Id = :accountId
    ];
    System.debug(a);
    return a;
  }
}
