"use client";
import { useState } from "react";

export default function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [submitting, setSubmitting] = useState(false);

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!form.name.trim()) newErrors.name = "Name is required";
        if (!form.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Invalid email address";
        }
        if (!form.message.trim()) newErrors.message = "Message is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: "" }); // clear error on input
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validate()) return;

        setSubmitting(true);
        try {
            const res = await fetch("https://formspree.io/f/mdklpqbn", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                alert("Message sent successfully!");
                setForm({ name: "", email: "", message: "" });
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (err) {
            console.error(err);
            alert("Error sending message.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="app-container relative" id="contact">
            <form
                className="container mx-auto mt-16"
                onSubmit={handleSubmit}
            >
                <h1 className="k2d font-bold w-fit mx-auto text-5xl tracking-wider contact_load">
                    Contact Me
                </h1>

                <div className="flex flex-col mt-8 gap-8 max-w-xl mx-4 md:mx-auto">
                    {/* Name */}
                    <div className="contact_load">
                        <p className="ml-4 mb-2">Name</p>
                        <input
                            className="px-4 py-2 w-full rounded-3xl bg-orange-500 text-white bg-opacity-10"
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Enter your Name"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div className="contact_load">
                        <p className="ml-4 mb-2">Email address</p>
                        <input
                            className="px-4 py-2 w-full rounded-3xl bg-orange-500 text-white bg-opacity-10"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Enter your Email address"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    {/* Message */}
                    <div className="contact_load">
                        <p className="ml-4 mb-2">Message</p>
                        <textarea
                            className="px-4 py-2 w-full h-36 rounded-3xl bg-orange-500 text-white bg-opacity-10"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Enter your Message here"
                        />
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        disabled={submitting}
                        className="bg-secondary contact_load mx-auto rounded-xl py-2 px-4 w-3/5 disabled:opacity-50"
                    >
                        {submitting ? "Sending..." : "Send Message"}
                    </button>
                </div>
            </form>
            <div className="absolute h-1/3 polka_dots -z-10 -right-16 bottom-1/4 -z-5 rotate-90 aspect-video"></div>
            <div className="absolute h-1/3 polka_dots -z-10 -left-8 top-16 -z-5 hidden md:block aspect-video"></div>
        </div>
    );
}
