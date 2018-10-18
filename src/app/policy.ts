export class Policy {

  public id: number;
  public policyNumber: number;
  public policyHolderName: string;
  public status: string;
  public  policyAmount: number;
  public premium: number;
  public paymentMode: string;
  public maturityDate: Date;

  constructor(id: number, policyNumber: number,
     policyHolderName: string, status: string,
    maturityDate: Date,  policyAmount: number,
     premium: number ,
       paymentMode: string) {

    this.id = id;
    this.policyNumber = policyNumber;
    this.policyHolderName = policyHolderName;
    this.maturityDate = maturityDate;
    this.status = status;
    this.paymentMode = paymentMode;
    this.premium = premium;
    this.policyAmount = policyAmount;

}

}
