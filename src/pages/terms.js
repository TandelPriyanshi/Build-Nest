import React from "react";
import '../cssFiles/terms.css'

const Terms = () => {
    return(
        <div className="term">
            <header className="t-header">
                <div class="t-container">
                    <h1>Terms of Service</h1>
                </div>
            </header>

            <section class="terms-container">
                <div class="t-container">
                    <h3>1. Introduction</h3>
                    <p>Welcome to Build Nest. These Terms of Service outline the rules and regulations for the use of our website. By accessing this site and purchasing from us, you agree to comply with these terms in full. If you disagree with any part, please do not use our services.</p>

                    <h3>2. Products and Services</h3>
                    <p>We offer a wide range of construction materials, tools, and equipment for sale. All products are subject to availability, and prices are subject to change at any time. We strive to ensure accurate product descriptions, but we do not guarantee that the content is free of errors or omissions.</p>

                    <h3>3. Ordering and Payments</h3>
                    <p>By placing an order with us, you agree that all information provided is accurate and complete. You will receive an email confirmation once your order is placed. Payments must be made through the accepted payment methods listed on our website.</p>

                    <h3>4. Shipping and Delivery</h3>
                    <p>We will ship your order as per the shipping option chosen at checkout. Delivery times may vary based on your location. We are not responsible for delays due to unforeseen circumstances, such as transportation disruptions or weather conditions.</p>

                    <h3>5. Returns and Refunds</h3>
                    <p>We accept returns within 30 days of purchase, provided the items are unused and in their original packaging. Refunds will be processed once the returned items are inspected. Shipping fees for returns are non-refundable unless the product was damaged or incorrect upon arrival.</p>

                    <h3>6. Intellectual Property</h3>
                    <p>All content on our website, including images, descriptions, logos, and design, is the property of [Your Construction Store] and is protected by copyright laws. You may not use or reproduce any of this content without our prior written permission.</p>

                    <h3>7. Limitation of Liability</h3>
                    <p>To the fullest extent permitted by law, [Your Construction Store] shall not be liable for any damages that result from the use of, or the inability to use, the materials on our website or our services, including any lost profits, data loss, or business interruption.</p>

                    <h3>8. User Responsibilities</h3>
                    <p>You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of or restrict the use of this site by any third party. Any unauthorized use of this site may give rise to a claim for damages or be a criminal offense.</p>

                    <h3>9. Changes to the Terms</h3>
                    <p>We reserve the right to update or change these Terms of Service at any time. Any changes will be posted on this page, and it is your responsibility to review them periodically.</p>
                </div>
            </section>
            <div className="spacer"></div>
            <footer className="t-footer">
                <p>© 2024 Build Nest. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Terms;