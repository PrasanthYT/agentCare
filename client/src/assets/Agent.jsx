import React, { useEffect, useState } from "react";
import { HelpCircle, Check } from "lucide-react";
import { toast } from "react-toastify";
import axios from "axios";

function Agent() {
  const [formData, setFormData] = useState({
    user_input_name: "",
    user_input_age: "",
    user_input_gender: "",
    user_inputs: "",
    user_input_email: "",
  });
  const [response, setResponse] = useState(null);
  const [responseCount, setResponseCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const count = parseInt(localStorage.getItem("responseCount")) || 0;
    setResponseCount(count);
  }, []);

  const incrementResponseCount = () => {
    const newCount = responseCount + 1;
    setResponseCount(newCount);
    localStorage.setItem("responseCount", newCount);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const webhookURL =
      "https://api-lr.agent.ai/v1/agent/pleodhxeca294yy9/webhook/2f4c1d21";

    try {
      const res = await axios.post(webhookURL, formData);
      setResponse(res.data);
      incrementResponseCount();
    } catch (error) {
      console.error("Error submitting the form:", error);
      toast.error("Failed to submit the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Response display component
  const ResponseDisplay = () => (
    <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 border border-gray-300 dark:border-neutral-700">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
        {response.response.format === "auto"
          ? response.response.heading
          : "Response"}
      </h3>

      <div
        className="prose dark:prose-invert text-sm"
        dangerouslySetInnerHTML={{ __html: response.response.response }}
      ></div>

      <div className="mt-4">
        <button
          onClick={() => setResponse(null)}
          className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Submit another inquiry
        </button>
      </div>
    </div>
  );

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid md:grid-cols-2 items-center gap-12">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight dark:text-white">
            Medical Report
          </h1>
          <p className="mt-1 md:text-lg text-gray-800 dark:text-neutral-200">
            Get a comprehensive medical assessment from our experienced
            healthcare professionals within 24 hours.
          </p>

          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
              What to expect?
            </h2>

            <ul className="mt-2 space-y-2">
              <li className="flex gap-x-3">
                <Check className="shrink-0 mt-0.5 size-5 text-gray-600 dark:text-neutral-400" />
                <span className="text-gray-600 dark:text-neutral-400">
                  Professional medical assessment
                </span>
              </li>

              <li className="flex gap-x-3">
                <Check className="shrink-0 mt-0.5 size-5 text-gray-600 dark:text-neutral-400" />
                <span className="text-gray-600 dark:text-neutral-400">
                  Secure and confidential report delivery
                </span>
              </li>

              <li className="flex gap-x-3">
                <Check className="shrink-0 mt-0.5 size-5 text-gray-600 dark:text-neutral-400" />
                <span className="text-gray-600 dark:text-neutral-400">
                  24-hour turnaround time
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
              Created with:
            </h2>

            <div className="mt-4 flex gap-x-8">
              <img
                src="https://agent.ai/agent.ai-gear/2.png"
                alt=""
                className="w-32"
              />
            </div>
          </div>

          <div className="mt-10 flex items-center gap-x-5">
            <span className="text-sm text-gray-500 dark:text-neutral-500">
              Trusted by over 10k patients monthly
            </span>
          </div>
        </div>

        {/* Right column - Form or Response */}
        <div className="relative">
          {response ? (
            <ResponseDisplay />
          ) : responseCount >= 3 ? (
            <div className="flex flex-col border rounded-lg p-4 dark:border-neutral-700">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                Limit Reached
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                You have already submitted {responseCount} inquiries. Your Limit
                reached.
              </p>
              <a href="https://www.buymeacoffee.com/prasanthj" target="_blank">
                <img
                  src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png"
                  alt="Buy Me A Coffee"
                  className="mt-4 w-32 "
                />
              </a>
            </div>
          ) : (
            <div className="flex flex-col border rounded-lg p-4 dark:border-neutral-700">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                Medical Inquiry
              </h2>

              <form className="mt-3" onSubmit={handleSubmit}>
                {/* Form fields remain the same */}
                <div className="grid gap-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label
                        htmlFor="user_input_name"
                        className="block mb-1 text-xs text-gray-700 font-medium dark:text-white"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="user_input_name"
                        id="user_input_name"
                        required
                        onChange={handleChange}
                        className="py-1.5 px-2 block w-full border border-gray-300 rounded text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="user_input_age"
                        className="block mb-1 text-xs text-gray-700 font-medium dark:text-white"
                      >
                        Age
                      </label>
                      <input
                        type="number"
                        name="user_input_age"
                        id="user_input_age"
                        required
                        onChange={handleChange}
                        className="py-1.5 px-2 block w-full border border-gray-300 rounded text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label
                        htmlFor="user_input_gender"
                        className="block mb-1 text-xs text-gray-700 font-medium dark:text-white"
                      >
                        Gender
                      </label>
                      <select
                        name="user_input_gender"
                        id="user_input_gender"
                        required
                        onChange={handleChange}
                        className="py-1.5 px-2 block w-full border border-gray-300 rounded text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                      >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <div className="flex items-center gap-1 mb-1">
                        <label
                          htmlFor="user_input_email"
                          className="text-xs text-gray-700 font-medium dark:text-white"
                        >
                          Email
                        </label>
                        <div className="group relative">
                          <HelpCircle className="h-3 w-3 text-gray-400 hover:text-gray-500 dark:text-gray-600 dark:hover:text-gray-500" />
                          <div className="invisible group-hover:visible absolute left-1/2 -translate-x-1/2 -top-2 -translate-y-full w-48 px-2 py-1 bg-gray-900 text-white text-xs rounded">
                            Report will be sent to your email securely
                            <div className="absolute left-1/2 -translate-x-1/2 top-full w-2 h-2 bg-gray-900 rotate-45"></div>
                          </div>
                        </div>
                      </div>
                      <input
                        type="email"
                        name="user_input_email"
                        id="user_input_email"
                        autoComplete="email"
                        onChange={handleChange}
                        className="py-1.5 px-2 block w-full border border-gray-300 rounded text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="user_inputs"
                      className="block mb-1 text-xs text-gray-700 font-medium dark:text-white"
                    >
                      Symptoms
                    </label>
                    <textarea
                      id="user_inputs"
                      name="user_inputs"
                      rows="3"
                      required
                      onChange={handleChange}
                      className="py-1.5 px-2 block w-full border border-gray-300 rounded text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                      placeholder="Describe your symptoms..."
                    ></textarea>
                  </div>
                </div>

                <div className="mt-2 flex items-start">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    required
                    className="mt-0.5 shrink-0 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  />
                  <label
                    htmlFor="consent"
                    className="ms-2 text-xs text-gray-600 dark:text-neutral-400"
                  >
                    I consent to the processing of my medical information and
                    have read the{" "}
                    <a
                      className="text-blue-600 hover:underline dark:text-blue-500"
                      href="#"
                    >
                      Privacy policy
                    </a>
                  </label>
                </div>

                <div className="mt-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2 px-3 inline-flex justify-center items-center text-sm font-medium rounded border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {loading ? "Processing..." : "Submit"}
                  </button>
                </div>

                <div className="mt-2 text-center">
                  <p className="text-xs text-gray-500 dark:text-neutral-500">
                    Report delivery within 24 hours
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Agent;
