class ProfessionalsController < ApplicationController
  before_action :set_professional, only: %i[ show edit update destroy ]

  def index
    cache_key = if params[:search].present?
                "professionals_search_#{params[:search].downcase.parameterize}"
              else
                "professionals_all"
              end

    loaded_from_cache = true

    professionals = Rails.cache.fetch(cache_key, expires_in: 10.minutes) do
      loaded_from_cache = false

      if params[:search].present?
        response = Professional.search_by_name_services_and_license_number(params[:search])
        records = response.records.includes(:professional_category, :services).to_a
      else
        records = Professional.includes(:professional_category, :services).to_a
      end

      records.as_json(include: [:professional_category, :services])
    end

    Rails.logger.info "🔍 Professionals loaded from #{loaded_from_cache ? 'cache' : 'database'} (key: #{cache_key})"

    render inertia: 'Professionals/Index', props: {
      professionals: professionals.as_json(include: [:professional_category, :services])
    }
  end

  def show
    professional = Professional.includes(:professional_category, :services).find(params[:id])
    render inertia: 'Professionals/Show', props: {
      professional: professional.as_json(include: [:professional_category, :services])
    }
  end

  def new
    @professional = Professional.new
  end

  def create
    @professional = Professional.new
    if @professional.save
      redirect_to @professional
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    if @professional.update(professional_params)
      redirect_to @profesional
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @professional.destroy
    redirect_to professionals_path
  end

  private
    def set_professional
      professional = Professional.find(params[:id])
    end

    def professional_params
      params.expect(professional: [:name, :license_number, :professional_category_id])
    end

end
