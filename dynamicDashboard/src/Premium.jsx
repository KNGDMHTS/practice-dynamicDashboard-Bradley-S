let isPremiumMember = false;
function PremiumMessage() { 
    return <p>
        {isPremiumMember
            ?"Thank you for being a premium member!"
            : "Upgrade to premium to enjoy exclusive features!"
            }
    </p>
}

export default PremiumMessage;