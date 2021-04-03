
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    # Use * to allow any website for the entrypoint
    origins '*'

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
