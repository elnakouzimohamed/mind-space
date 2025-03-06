import Image from "next/image"

export default function cards(){


    return (
        <>
        <div class="card-container">
        <div class="card">
            <Image src="pepsi.jpg" />
            <div class="card-content">
                <h2>Fizz the World</h2>
                <p>Pepsi's Expo 2022 campaign</p>
            </div>
        </div>

        <div class="">
            <Image src="puck-display.jpg" alt="A Display To Inspire"/>
            <div class="card-content">
                <h2>A Display To Inspire The Every Day Chef</h2>
                <p>We created our bespoke, modular displays...</p>
            </div>
        </div>
    </div>
    </>
    )
}