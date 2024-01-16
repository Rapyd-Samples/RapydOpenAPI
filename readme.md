# RapydOpenAPI

This official repository contains the OpenAPI specifications for Rapyd.

## Structure

The repository is divided into two main folders:

- `postman`: This folder contains the Postman collections for Rapyd API.
- `webhooks`: This folder contains the webhook configurations for Rapyd API - for future use.

Here are descriptions of some specific webhooks:

- `CARD_ISSUING_SALE`: The CARD_ISSUING_SALE webhook is sent when Rapyd completes a transaction made by an issued card.
- `CONTACT_LIMIT_CHANGE`: The CONTACT_LIMIT_CHANGE webhook is sent when there is a change to the limits on transactions that the client or merchant can create. The changes occur upon approval of additional identification information sent by the user as part of the onboarding process.
- `CUSTOMER_CREATED`: The CUSTOMER_CREATED webhook is sent when a customer is created.
- `PAYMENT_COMPLETED`: The PAYMENT_COMPLETED webhook is sent when funds are received from a payment method. This includes information about the payment, such as the payment ID, the amount, the status, and more.

## Postman

The Postman collections provide a simple way to interact with the Rapyd API. You can import these collections into your Postman application and start making requests.

## Webhooks

The webhooks folder contains the configurations for various webhooks provided by Rapyd. You can use these configurations to set up your webhooks.

## Getting Started

To get started with using these specifications, clone this repository to your local machine. Then, navigate to the `postman` or `webhooks` folder depending on your needs.

## Contributing

Contributions are welcome. Please make sure to read the contributing guide before making a pull request.

## Articles 
[Empowering Rapyd Payments with OpenAPI](https://community.rapyd.net/t/empowering-rapyd-payments-with-openapi/58880)
